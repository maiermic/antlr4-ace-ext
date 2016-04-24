ace.define('ace/ext/antlr4/tokenizer', ['antlr4/index'], function (require, exports, module) {
  "use strict";

  var antlr4 = require('antlr4/index');

  const SkippedAntlrTokenType = -1;
  const DefaultAceTokenType = 'text';

  var Antlr4Tokenizer = function (Lexer, antlrTokenNameToAceTokenType) {
    this.Lexer = Lexer;
    this.antlrTokenNameToAceTokenType = antlrTokenNameToAceTokenType || {};
  };

  (function () {
    this.getLineTokens = function getLineTokens(line) {
      var stream = new antlr4.InputStream(line + '\n');
      var lexer = new this.Lexer(stream);

      // added line feed might cause token recognition error
      // that should be ignored (not logged)
      lexer.removeErrorListeners();

      var commonTokens = lexer.getAllTokens();
      removeLineFeedOfLastCommonTokenValue(commonTokens);
      var changeTokenTypeToAceType = changeTokenType(
        this.mapAntlrTokenTypeToAceType.bind(this)
      );
      var tokens = insertSkippedTokens(commonTokens, line)
        .map(mapCommonTokenToAceToken)
        .map(changeTokenTypeToAceType);
      return {
        tokens: tokens,
        state: 'start'
      };
    };

    this.getAntlrTokenName = function getAntlrTokenName(tokenType) {
      return this.Lexer.symbolicNames[tokenType] ||
        this.Lexer.literalNames[tokenType];
    };

    this.mapAntlrTokenNameToAceType = function mapAntlrTokenNameToAceType(tokenName) {
      return this.antlrTokenNameToAceTokenType[tokenName] || DefaultAceTokenType;
    };

    this.mapAntlrTokenTypeToAceType = function mapAntlrTokenTypeToAceType(tokenType) {
      return this.mapAntlrTokenNameToAceType(this.getAntlrTokenName(tokenType));
    };

  }).call(Antlr4Tokenizer.prototype);

  function removeLineFeedOfLastCommonTokenValue(commonTokens) {
    if (commonTokens.length > 0) {
      var last = commonTokens[commonTokens.length - 1];
      last.text = last.text.replace('\n', '');
    }
  }
  
  function changeTokenType(mapType) {
    return function (token) {
      token.type = mapType(token.type);
      return token;
    };
  }

  function mapCommonTokenToAceToken(commonToken) {
    return {
      type: commonToken.type,
      value: commonToken.text
    };
  }

  function insertSkippedTokens(tokens, line) {
    var skippedText;
    var nextTokenColumn = 0;
    var allTokens = tokens.reduce(function (acc, token) {
      skippedText = line.substring(nextTokenColumn, token.column);
      if (skippedText !== '') {
        acc.push({
          type: SkippedAntlrTokenType,
          text: skippedText,
          column: nextTokenColumn
        });
      }
      acc.push(token);
      nextTokenColumn = getEndColumnOfToken(token) + 1;
      return acc;
    }, []);
    // add skipped token at the end of the line
    skippedText = line.substr(nextTokenColumn);
    if (skippedText !== '') {
      allTokens.push({
        type: SkippedAntlrTokenType,
        text: skippedText,
        column: nextTokenColumn
      });
    }
    return allTokens;
  }

  function getEndColumnOfToken(token) {
    return token.column + token.text.length - 1;
  }

  module.exports = {
    SkippedAntlrTokenType: SkippedAntlrTokenType,
    DefaultAceTokenType: DefaultAceTokenType,
    Antlr4Tokenizer: Antlr4Tokenizer,
    removeLineFeedOfLastCommonTokenValue: removeLineFeedOfLastCommonTokenValue,
    changeTokenType: changeTokenType,
    mapCommonTokenToAceToken: mapCommonTokenToAceToken,
    insertSkippedTokens: insertSkippedTokens,
    getEndColumnOfToken: getEndColumnOfToken
  };
});
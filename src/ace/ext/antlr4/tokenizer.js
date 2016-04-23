ace.define('ace/ext/antlr4/tokenizer', ['antlr4/index'], function (require, exports, module) {
  "use strict";

  var antlr4 = require('antlr4/index');

  const SkippedTokenType = -1;

  var Antlr4Tokenizer = function (Lexer) {
    this.Lexer = Lexer;
  };

  (function () {
    this.getLineTokens = function getLineTokens(line) {
      var stream = new antlr4.InputStream(line);
      var lexer = new this.Lexer(stream);
      var commonTokens = lexer.getAllTokens();
      var tokens = insertSkippedTokens(commonTokens, line)
        .map(mapCommonTokenToAceToken);
      return {
        tokens: tokens,
        state: 'start'
      };
    };
  }).call(Antlr4Tokenizer.prototype);

  function mapCommonTokenToAceToken(commonToken) {
    return {
      type: 'text',
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
          type: SkippedTokenType,
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
        type: SkippedTokenType,
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
    SkippedTokenType: SkippedTokenType,
    Antlr4Tokenizer: Antlr4Tokenizer,
    mapCommonTokenToAceToken: mapCommonTokenToAceToken,
    insertSkippedTokens: insertSkippedTokens,
    getEndColumnOfToken: getEndColumnOfToken
  };
});
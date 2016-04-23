ace.define('ace/ext/antlr4/tokenizer', ['antlr4/index'], function (require, exports, module) {
  "use strict";

  var antlr4 = require('antlr4/index');

  var Antlr4Tokenizer = function (Lexer) {
    this.Lexer = Lexer;
  };

  (function () {
    this.getLineTokens = function getLineTokens(line) {
      var stream = new antlr4.InputStream(line);
      var lexer = new this.Lexer(stream);
      var commonTokens = lexer.getAllTokens();
      var tokens = commonTokens.map(mapCommonTokenToAceToken);
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

  module.exports = {
    Antlr4Tokenizer: Antlr4Tokenizer,
    mapCommonTokenToAceToken: mapCommonTokenToAceToken
  }
});
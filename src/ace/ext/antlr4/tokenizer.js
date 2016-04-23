ace.define('ace/ext/antlr4/tokenizer', ['antlr4/index'], function (require, exports, module) {
  "use strict";

  var antlr4 = require('antlr4/index');

  var Antlr4Tokenizer = function () {
    // constructor
  };

  (function () {
    this.getLineTokens = function getLineTokens() {
      return {
        tokens: [],
        state: 'start'
      };
    };
  }).call(Antlr4Tokenizer.prototype);

  module.exports = {
    Antlr4Tokenizer: Antlr4Tokenizer
  }
});
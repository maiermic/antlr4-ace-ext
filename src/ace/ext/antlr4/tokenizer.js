ace.define('ace/ext/antlr4/tokenizer', ['antlr4/index'], function (require, exports, module) {
  "use strict";

  var antlr4 = require('antlr4/index');

  var Antlr4Tokenizer = function () {
    // constructor
  };

  (function () {
    this.getLineTokens = function getLineTokens(line) {
      var tokens = (line === '')
        ? []
        : [ { type: 'text', value: line } ];
      return {
        tokens: tokens,
        state: 'start'
      };
    };
  }).call(Antlr4Tokenizer.prototype);

  module.exports = {
    Antlr4Tokenizer: Antlr4Tokenizer
  }
});
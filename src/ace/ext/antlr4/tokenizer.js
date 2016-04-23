ace.define('ace/ext/antlr4/tokenizer', ['antlr4/index'], function (require, exports, module) {
  "use strict";

  var antlr4 = require('antlr4/index');
  
  module.exports = {
    antlr4IsDefined: !!antlr4
  }
});
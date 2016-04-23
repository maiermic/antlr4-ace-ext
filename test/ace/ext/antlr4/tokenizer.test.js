if (typeof process !== 'undefined') {
  require('amd-loader');
  global.ace = { define: global.define };
}

const assert = require('chai').assert;
const M = require('../../../../src/ace/ext/antlr4/tokenizer');

module.exports = {
  'tokenizer': {
    'Antlr4Tokenizer': {
      'is constructor': function () {
        new M.Antlr4Tokenizer();
      }
    }
  }
};
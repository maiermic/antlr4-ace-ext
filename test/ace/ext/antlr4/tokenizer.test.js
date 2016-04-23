if (typeof process !== 'undefined') {
  require('amd-loader');
  global.ace = { define: global.define };
}

const assert = require('chai').assert;
const M = require('../../../../src/ace/ext/antlr4/tokenizer');

module.exports = {
  'tokenizer': {
    'module': {
      'is defined': function () {
        assert.isTrue(M.antlr4IsDefined);
      }
    }
  }
};
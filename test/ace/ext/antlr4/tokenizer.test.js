if (typeof process !== 'undefined') {
  require('amd-loader');
  global.ace = {define: global.define};
}

const assert = require('chai').assert;
const M = require('../../../../src/ace/ext/antlr4/tokenizer');
const SingleTokenLexer = require('../../../../src/parser/SingleToken/SingleTokenLexer').SingleTokenLexer;
const SkippedTokenLexer = require('../../../../src/parser/SkippedToken/SkippedTokenLexer').SkippedTokenLexer;

module.exports = {
  tokenizer: {
    Antlr4Tokenizer: {
      'is constructor': function () {
        new M.Antlr4Tokenizer();
      },
      getLineTokens: {
        'gets empty token list of empty line': function () {
          var tokenizer = new M.Antlr4Tokenizer(SingleTokenLexer);
          assert.deepEqual(
            tokenizer.getLineTokens(''),
            {
              tokens: [],
              state: 'start'
            }
          );
        },
        'gets single token': function () {
          var tokenizer = new M.Antlr4Tokenizer(SingleTokenLexer);
          assert.deepEqual(
            tokenizer.getLineTokens('token'),
            {
              tokens: [
                {type: 'text', value: 'token'}
              ],
              state: 'start'
            }
          );
        },
        'get multiple tokens': function () {
          var tokenizer = new M.Antlr4Tokenizer(SingleTokenLexer);
          assert.deepEqual(
            tokenizer.getLineTokens('tokentoken'),
            {
              tokens: [
                {type: 'text', value: 'token'},
                {type: 'text', value: 'token'}
              ],
              state: 'start'
            }
          );
        },
        'get skipped tokens': {
          'of line that contains only skipped tokens': function () {
            var tokenizer = new M.Antlr4Tokenizer(SkippedTokenLexer);
            assert.deepEqual(
              tokenizer.getLineTokens('   '),
              {
                tokens: [
                  {type: 'text', value: '   '}
                ],
                state: 'start'
              }
            );
          },
          'at beginning of line': function () {
            var tokenizer = new M.Antlr4Tokenizer(SkippedTokenLexer);
            assert.deepEqual(
              tokenizer.getLineTokens('    token'),
              {
                tokens: [
                  {type: 'text', value: '    '},
                  {type: 'text', value: 'token'}
                ],
                state: 'start'
              }
            );
          },
          'between other tokens': function () {
            var tokenizer = new M.Antlr4Tokenizer(SkippedTokenLexer);
            assert.deepEqual(
              tokenizer.getLineTokens('token token'),
              {
                tokens: [
                  {type: 'text', value: 'token'},
                  {type: 'text', value: ' '},
                  {type: 'text', value: 'token'}
                ],
                state: 'start'
              }
            );
          },
          'at line end': function () {
            var tokenizer = new M.Antlr4Tokenizer(SkippedTokenLexer);
            assert.deepEqual(
              tokenizer.getLineTokens('token  '),
              {
                tokens: [
                  {type: 'text', value: 'token'},
                  {type: 'text', value: '  '}
                ],
                state: 'start'
              }
            );
          }
        }
      }
    },
    mapCommonTokenToAceToken: {
      'should map CommonToken to ACE token format': function () {
        var commonToken = {
          type: 1,
          text: 'token'
        };
        assert.deepEqual(
          M.mapCommonTokenToAceToken(commonToken),
          {
            type: 'text',
            value: 'token'
          }
        );
      }
    },
    insertSkippedTokens: {
      'should insert skipped tokens': function () {
        var line = 'int g = 9;';
        var commonTokens = [
          {type: 4, start: 0, stop: 2, line: 1, column: 0, text: 'int'},
          {type: 22, start: 4, stop: 4, line: 1, column: 4, text: 'g'},
          {type: 1, start: 6, stop: 6, line: 1, column: 6, text: '='},
          {type: 23, start: 8, stop: 8, line: 1, column: 8, text: '9'},
          {type: 2, start: 9, stop: 9, line: 1, column: 9, text: ';'}
        ];
        var allTokensInLine = [
          {type: 4, start: 0, stop: 2, line: 1, column: 0, text: 'int'},
          {type: M.SkippedTokenType, column: 3, text: ' '},
          {type: 22, start: 4, stop: 4, line: 1, column: 4, text: 'g'},
          {type: M.SkippedTokenType, column: 5, text: ' '},
          {type: 1, start: 6, stop: 6, line: 1, column: 6, text: '='},
          {type: M.SkippedTokenType, column: 7, text: ' '},
          {type: 23, start: 8, stop: 8, line: 1, column: 8, text: '9'},
          {type: 2, start: 9, stop: 9, line: 1, column: 9, text: ';'}
        ];
        assert.deepEqual(
          M.insertSkippedTokens(commonTokens, line),
          allTokensInLine
        );
      }
    },
    getEndColumnOfToken: {
      'in the first line': function () {
        var commonToken = {
          type: 4,
          start: 0, stop: 2,
          line: 1, column: 0,
          text: 'int'
        };
        assert.equal(
          M.getEndColumnOfToken(commonToken),
          2
        );
      },
      'in the second line': function () {
        var commonToken = {
          type: 4,
          start: 10, stop: 12,
          line: 2, column: 5,
          text: 'int'
        };
        assert.equal(
          M.getEndColumnOfToken(commonToken),
          7
        );
      }
    }
  }
};
if (typeof process !== 'undefined') {
  require('amd-loader');
  global.ace = {define: global.define};
}

const assert = require('chai').assert;
const M = require('../src/tokenizer');
const VariableDeclarationLexer = require('../src/parser/VariableDeclaration/VariableDeclarationLexer').VariableDeclarationLexer;
const SingleTokenLexer = require('../src/parser/SingleToken/SingleTokenLexer').SingleTokenLexer;
const SkippedTokenLexer = require('../src/parser/SkippedToken/SkippedTokenLexer').SkippedTokenLexer;
const TokenWithLineFeedLexer = require('../src/parser/TokenWithLineFeed/TokenWithLineFeedLexer').TokenWithLineFeedLexer;

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
                {type: M.DefaultAceTokenType, value: 'token'}
              ],
              state: 'start'
            }
          );
        },
        'gets multiple tokens': function () {
          var tokenizer = new M.Antlr4Tokenizer(SingleTokenLexer);
          assert.deepEqual(
            tokenizer.getLineTokens('tokentoken'),
            {
              tokens: [
                {type: M.DefaultAceTokenType, value: 'token'},
                {type: M.DefaultAceTokenType, value: 'token'}
              ],
              state: 'start'
            }
          );
        },
        'gets single line token that contains line feed': function () {
          var antlrTokenNameToAceTokenType = {
            COMMENT: 'comment'
          };
          var tokenizer = new M.Antlr4Tokenizer(TokenWithLineFeedLexer, antlrTokenNameToAceTokenType);
          var line = '// line feed is not part of line';
          assert.deepEqual(
            tokenizer.getLineTokens(line),
            {
              tokens: [
                {type: 'comment', value: line}
              ],
              state: 'start'
            }
          );
        },
        'gets skipped tokens': {
          'of line that contains only skipped tokens': function () {
            var tokenizer = new M.Antlr4Tokenizer(SkippedTokenLexer);
            assert.deepEqual(
              tokenizer.getLineTokens('   '),
              {
                tokens: [
                  {type: M.DefaultAceTokenType, value: '   '}
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
                  {type: M.DefaultAceTokenType, value: '    '},
                  {type: M.DefaultAceTokenType, value: 'token'}
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
                  {type: M.DefaultAceTokenType, value: 'token'},
                  {type: M.DefaultAceTokenType, value: ' '},
                  {type: M.DefaultAceTokenType, value: 'token'}
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
                  {type: M.DefaultAceTokenType, value: 'token'},
                  {type: M.DefaultAceTokenType, value: '  '}
                ],
                state: 'start'
              }
            );
          }
        },
        'maps ANTLR4 token type to ACE token type': {
          'using token type to name map': function () {
            // see src/VariableDeclaration/VariableDeclaration.tokens
            var antlrTokenNameToAceTokenType = {
              "'='":     'keyword.operator', 
              "';'":     'punctuation.operator', 
              "'float'": 'storage.type', 
              "'int'":   'storage.type', 
              "ID":      'identifier', 
              "NUMBER":  'constant.numeric' 
            };
            var tokenizer = new M.Antlr4Tokenizer(VariableDeclarationLexer, antlrTokenNameToAceTokenType);
            assert.deepEqual(
              tokenizer.getLineTokens('int x = 42;'),
              {
                tokens: [
                  {type: 'storage.type',         value: 'int'},
                  {type: M.DefaultAceTokenType,  value: ' '},
                  {type: 'identifier',           value: 'x'},
                  {type: M.DefaultAceTokenType,  value: ' '},
                  {type: 'keyword.operator',     value: '='},
                  {type: M.DefaultAceTokenType,  value: ' '},
                  {type: 'constant.numeric',     value: '42'},
                  {type: 'punctuation.operator', value: ';'}
                ],
                state: 'start'
              }
            )
          }
        }
      },
      getAntlrTokenName: {
        'of symbolic name': function () {
          var tokenizer = new M.Antlr4Tokenizer(VariableDeclarationLexer);
          assert.equal(
            tokenizer.getAntlrTokenName(VariableDeclarationLexer.ID),
            'ID'
          );
        },
        'of literal name': function () {
          var tokenizer = new M.Antlr4Tokenizer(VariableDeclarationLexer);
          assert.equal(
            tokenizer.getAntlrTokenName(VariableDeclarationLexer.T__0),
            "'='"
          );
        }
      },
      mapAntlrTokenNameToAceType: {
        'of defined name': function () {
          var antlrTokenNameToAceTokenType = {
            'ID': 'identifier'
          };
          var tokenizer = new M.Antlr4Tokenizer(VariableDeclarationLexer, antlrTokenNameToAceTokenType);
          assert.equal(
            tokenizer.mapAntlrTokenNameToAceType('ID'),
            'identifier'
          );
        },
        'of undefined name returns default type': function () {
          var antlrTokenNameToAceTokenType = {
            'ID': 'identifier'
          };
          var tokenizer = new M.Antlr4Tokenizer(VariableDeclarationLexer, antlrTokenNameToAceTokenType);
          assert.equal(
            tokenizer.mapAntlrTokenNameToAceType('NUMBER'),
            M.DefaultAceTokenType
          );
        }
      },
      mapAntlrTokenTypeToAceType: {
        'of non skipped token': function () {
          var antlrTokenNameToAceTokenType = {
            'ID': 'identifier'
          };
          var tokenizer = new M.Antlr4Tokenizer(VariableDeclarationLexer, antlrTokenNameToAceTokenType);
          assert.equal(
            tokenizer.mapAntlrTokenTypeToAceType(VariableDeclarationLexer.ID),
            'identifier'
          );
        },
        'of skipped token returns default type': function () {
          var tokenizer = new M.Antlr4Tokenizer(VariableDeclarationLexer);
          assert.equal(
            tokenizer.mapAntlrTokenTypeToAceType(M.SkippedAntlrTokenType),
            M.DefaultAceTokenType
          );
        }
      }
    },
    removeLineFeedOfLastCommonTokenValue: {
      'of empty token array does nothing': function () {
        var commonTokens = [];
        M.removeLineFeedOfLastCommonTokenValue(commonTokens);
        assert.deepEqual(commonTokens, []);
      },
      'that contains line feed': function () {
        var commonTokens = [
          {text: 'int'},
          {text: 'g'},
          {text: '='},
          {text: '9'},
          {text: ';'},
          {text: '// line feed should be removed\n'}
        ];
        M.removeLineFeedOfLastCommonTokenValue(commonTokens);
        assert.deepEqual(
          commonTokens,
          [
            {text: 'int'},
            {text: 'g'},
            {text: '='},
            {text: '9'},
            {text: ';'},
            {text: '// line feed should be removed'}
          ]
        );
      },
      'that contains no line feed': function () {
        var commonTokens = [
          {text: 'int'},
          {text: 'g'},
          {text: '='},
          {text: '9'},
          {text: ';'}
        ];
        M.removeLineFeedOfLastCommonTokenValue(commonTokens);
        assert.deepEqual(
          commonTokens,
          [
            {text: 'int'},
            {text: 'g'},
            {text: '='},
            {text: '9'},
            {text: ';'}
          ]
        );
      }
    },
    changeTokenType: {
      'should change type of token': function () {
        var token = { type: 'oldType', value: 'whatever' };
        function mapToNewType() {
          return 'newType';
        }
        assert.deepEqual(
          M.changeTokenType(mapToNewType)(token),
          { type: 'newType', value: 'whatever' }
        );
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
            type: 1,
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
          {type: M.SkippedAntlrTokenType, column: 3, text: ' '},
          {type: 22, start: 4, stop: 4, line: 1, column: 4, text: 'g'},
          {type: M.SkippedAntlrTokenType, column: 5, text: ' '},
          {type: 1, start: 6, stop: 6, line: 1, column: 6, text: '='},
          {type: M.SkippedAntlrTokenType, column: 7, text: ' '},
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
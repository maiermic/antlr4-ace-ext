if (typeof process !== 'undefined') {
  require('amd-loader');
  global.ace = {define: global.define};
}

const assert = require('chai').assert;
const M = require('../../../../src/ace/ext/antlr4/token-type-map');

module.exports = {
  'token-type-map': {
    createTokenTypeMap: {
      'should convert mapping to token type map': function () {
        assert.deepEqual(
          M.createTokenTypeMap({
            literals: {
              'keyword.operator': ['+', '-'],
              'keyword.control': 'return'
            },
            symbols: {
              'identifier': 'ID',
              'constant.numeric': 'INT'
            }
          }),
          {
            "'+'": 'keyword.operator',
            "'-'": 'keyword.operator',
            "'return'": 'keyword.control',
            "ID": 'identifier',
            "INT": 'constant.numeric'
          }
        );
      }
    },
    mapLiterals: {
      'should convert mapping to token type map': function () {
        assert.deepEqual(
          M.mapLiterals({
            'keyword.operator': ['+', '-'],
            'keyword.control': 'return'
          }),
          {
            "'+'": 'keyword.operator',
            "'-'": 'keyword.operator',
            "'return'": 'keyword.control'
          }
        );
      }
    },
    mapSymbols: {
      'should convert mapping to token type map': function () {
        assert.deepEqual(
          M.mapSymbols({
            'identifier': 'ID',
            'constant.numeric': 'INT'
          }),
          {
            "ID": 'identifier',
            "INT": 'constant.numeric'
          }
        );
      }
    },
    mergeObjects: {
      'should merge two objects into one': function () {
        var first = { a: 1, b: 2 };
        var second = { c: 3, d: 4, e: 5 };
        assert.deepEqual(
          M.mergeObjects(first, second),
          { a: 1, b: 2, c: 3, d: 4, e: 5 }
        );
      }
    },
    flatten: {
      'should flatten array with Array.reduce': function () {
        assert.deepEqual(
          [[0, 1], [2, 3, 4], [5, [6, 7]]].reduce(M.flatten, []),
          [0, 1, 2, 3, 4, 5, [6, 7]]
        );
      }
    },
    keysWithValue: {
      'should create object with keys as properties that have passed value': function () {
        assert.deepEqual(
          M.keysWithValue(['float', 'int', 'void'], 'storage.type'),
          {
            float: 'storage.type',
            int: 'storage.type',
            void: 'storage.type'
          }
        );
      }
    },
    mapObject: {
      'should map object properties to single properties': function () {
        assert.deepEqual(
          M.mapObject(
            {
              'k1': 'v1',
              'k2': 'v2'
            },
            function invertKeyValue(key, value) {
              return [[value, key]];
            }
          ),
          {
            'v1': 'k1',
            'v2': 'k2'
          }
        )
      },
      'should map object properties to multiple properties': function () {
        assert.deepEqual(
          M.mapObject(
            {
              'k1': ['v1'],
              'k2': ['v2a', 'v2b']
            },
            function invertKeyValues(key, values) {
              return values.map(function (value) {
                return [value, key];
              });
            }
          ),
          {
            'v1': 'k1',
            'v2a': 'k2',
            'v2b': 'k2'
          }
        )
      }
    },
    toArray: {
      'should return passed array': function () {
        assert.deepEqual(
          M.toArray(['true', 'false']),
          ['true', 'false']
        );
      },
      'should enclose passed value in an array': function () {
        assert.deepEqual(
          M.toArray('true'),
          ['true']
        );
      }
    },
    toLiteralName: {
      'should enclose passed string in single quotation marks': function () {
        assert.equal(
          M.toLiteralName("+"),
          "'+'"
        );
      }
    },
    toPairs: {
      'should create key-value pairs of an object': function () {
        assert.deepEqual(
          M.toPairs({
            k1: 'v1',
            k2: 'v2'
          }),
          [
            ['k1', 'v1'],
            ['k2', 'v2']
          ]
        );
      }
    }
  }
};

ace.define('ace/ext/antlr4/token-type-map', [], function (require, exports, module) {
  "use strict";

  function createTokenTypeMap(mapping) {
    var literals = mapLiterals(mapping.literals);
    var symbols = mapSymbols(mapping.symbols);
    return mergeObjects(literals, symbols);
  }

  function mergeObjects(a, b) {
    return toPairs(a).concat(toPairs(b))
      .reduce(addKeyValuePairToObject, {});
  }

  function mapLiterals(literals) {
    return mapObject(
      literals,
      function (type, tokenName) {
        return toArray(tokenName)
          .map(toLiteralName)
          .map(function (literalName) {
            return [literalName, type];
          });
      }
    );
  }

  function mapSymbols(symbols) {
    return mapObject(
      symbols,
      function reverse(type, tokenName) {
        return toArray(tokenName)
          .map(function (symbolName) {
            return [symbolName, type];
          });
      }
    );
  }

  function mapObject(obj, mapFn) {
    return toPairs(obj)
      .map(function (pair) {
        return mapFn(pair[0], pair[1]);
      })
      .reduce(flatten, [])
      .reduce(addKeyValuePairToObject, {});
  }

  function addKeyValuePairToObject(obj, pair) {
    obj[pair[0]] = pair[1];
    return obj;
  }

  function toPairs(obj) {
    return Object.keys(obj)
      .map(function (key) {
        return [key, obj[key]];
      });
  }

  function flatten(a, b) {
    return a.concat(b);
  }

  function keysWithValue(keys, value) {
    return keys.reduce(function (obj, key) {
      obj[key] = value;
      return obj;
    }, {});
  }

  function toArray(value) {
    return Array.isArray(value) ? value : [value];
  }
  function toLiteralName(name) {
    return "'" + name + "'";
  }

  module.exports = {
    createTokenTypeMap: createTokenTypeMap,
    mergeObjects: mergeObjects,
    mapLiterals: mapLiterals,
    mapSymbols: mapSymbols,
    flatten: flatten,
    keysWithValue: keysWithValue,
    mapObject: mapObject,
    toArray: toArray,
    toLiteralName: toLiteralName,
    toPairs: toPairs
  };
});
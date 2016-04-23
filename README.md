[![Build Status](https://travis-ci.org/maiermic/antlr4-ace-ext.svg)](https://travis-ci.org/maiermic/antlr4-ace-ext)

Tokenizer for [ACE editor][ACE editor] to do syntax highlighting using an [ANTLR4][ANTLR4] lexer.

## How to build
 
### Required

- [Node.JS](https://nodejs.org) (to run tests)
- [ANTLR4](http://www.antlr.org/download.html) (`antlr4` has to be available as environment variable to (re-) build grammar files)  

### Build Instructions

1. Install dependencies: `npm install` 
2. Build project: `npm run build` 
3. Run tests: `npm test` 

[ACE editor]: https://ace.c9.io
[ANTLR4]: http://www.antlr.org/
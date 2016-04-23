// Generated from grammar/SingleToken.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u0003\u000b\b\u0001\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0002\u0002\u0003\u0003",
    "\u0003\u0003\u0002\u0002\n\u0002\u0003\u0003\u0002\u0002\u0002\u0003",
    "\u0005\u0003\u0002\u0002\u0002\u0005\u0006\u0007v\u0002\u0002\u0006",
    "\u0007\u0007q\u0002\u0002\u0007\b\u0007m\u0002\u0002\b\t\u0007g\u0002",
    "\u0002\t\n\u0007p\u0002\u0002\n\u0004\u0003\u0002\u0002\u0002\u0003",
    "\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function SingleTokenLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

SingleTokenLexer.prototype = Object.create(antlr4.Lexer.prototype);
SingleTokenLexer.prototype.constructor = SingleTokenLexer;

SingleTokenLexer.EOF = antlr4.Token.EOF;
SingleTokenLexer.TOKEN = 1;


SingleTokenLexer.modeNames = [ "DEFAULT_MODE" ];

SingleTokenLexer.literalNames = [ null, "'token'" ];

SingleTokenLexer.symbolicNames = [ null, "TOKEN" ];

SingleTokenLexer.ruleNames = [ "TOKEN" ];

SingleTokenLexer.grammarFileName = "SingleToken.g4";



exports.SingleTokenLexer = SingleTokenLexer;


// Generated from grammar/SkippedToken.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u0004\u0014\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003",
    "\u0002\u0006\u0002\t\n\u0002\r\u0002\u000e\u0002\n\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0002\u0002\u0004\u0003\u0003\u0005\u0004\u0003\u0002\u0002\u0014",
    "\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002",
    "\u0003\b\u0003\u0002\u0002\u0002\u0005\u000e\u0003\u0002\u0002\u0002",
    "\u0007\t\u0007\"\u0002\u0002\b\u0007\u0003\u0002\u0002\u0002\t\n\u0003",
    "\u0002\u0002\u0002\n\b\u0003\u0002\u0002\u0002\n\u000b\u0003\u0002\u0002",
    "\u0002\u000b\f\u0003\u0002\u0002\u0002\f\r\b\u0002\u0002\u0002\r\u0004",
    "\u0003\u0002\u0002\u0002\u000e\u000f\u0007v\u0002\u0002\u000f\u0010",
    "\u0007q\u0002\u0002\u0010\u0011\u0007m\u0002\u0002\u0011\u0012\u0007",
    "g\u0002\u0002\u0012\u0013\u0007p\u0002\u0002\u0013\u0006\u0003\u0002",
    "\u0002\u0002\u0004\u0002\n\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function SkippedTokenLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

SkippedTokenLexer.prototype = Object.create(antlr4.Lexer.prototype);
SkippedTokenLexer.prototype.constructor = SkippedTokenLexer;

SkippedTokenLexer.EOF = antlr4.Token.EOF;
SkippedTokenLexer.SPACES = 1;
SkippedTokenLexer.TOKEN = 2;


SkippedTokenLexer.modeNames = [ "DEFAULT_MODE" ];

SkippedTokenLexer.literalNames = [ null, null, "'token'" ];

SkippedTokenLexer.symbolicNames = [ null, "SPACES", "TOKEN" ];

SkippedTokenLexer.ruleNames = [ "SPACES", "TOKEN" ];

SkippedTokenLexer.grammarFileName = "SkippedToken.g4";



exports.SkippedTokenLexer = SkippedTokenLexer;


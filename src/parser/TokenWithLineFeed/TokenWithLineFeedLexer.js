// Generated from grammar/TokenWithLineFeed.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u0003\u0010\b\u0001\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0007\u0002\n\n\u0002\f\u0002\u000e\u0002\r",
    "\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u000b\u0002\u0003\u0003\u0003",
    "\u0003\u0002\u0002\u0010\u0002\u0003\u0003\u0002\u0002\u0002\u0003\u0005",
    "\u0003\u0002\u0002\u0002\u0005\u0006\u00071\u0002\u0002\u0006\u0007",
    "\u00071\u0002\u0002\u0007\u000b\u0003\u0002\u0002\u0002\b\n\u000b\u0002",
    "\u0002\u0002\t\b\u0003\u0002\u0002\u0002\n\r\u0003\u0002\u0002\u0002",
    "\u000b\f\u0003\u0002\u0002\u0002\u000b\t\u0003\u0002\u0002\u0002\f\u000e",
    "\u0003\u0002\u0002\u0002\r\u000b\u0003\u0002\u0002\u0002\u000e\u000f",
    "\u0007\f\u0002\u0002\u000f\u0004\u0003\u0002\u0002\u0002\u0004\u0002",
    "\u000b\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function TokenWithLineFeedLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

TokenWithLineFeedLexer.prototype = Object.create(antlr4.Lexer.prototype);
TokenWithLineFeedLexer.prototype.constructor = TokenWithLineFeedLexer;

TokenWithLineFeedLexer.EOF = antlr4.Token.EOF;
TokenWithLineFeedLexer.COMMENT = 1;


TokenWithLineFeedLexer.modeNames = [ "DEFAULT_MODE" ];

TokenWithLineFeedLexer.literalNames = [  ];

TokenWithLineFeedLexer.symbolicNames = [ null, "COMMENT" ];

TokenWithLineFeedLexer.ruleNames = [ "COMMENT" ];

TokenWithLineFeedLexer.grammarFileName = "TokenWithLineFeed.g4";



exports.TokenWithLineFeedLexer = TokenWithLineFeedLexer;


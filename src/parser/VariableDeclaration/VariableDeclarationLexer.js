// Generated from grammar/VariableDeclaration.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\t7\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0007\u0006%\n\u0006\f\u0006\u000e\u0006(\u000b\u0006\u0003",
    "\u0007\u0003\u0007\u0003\b\u0006\b-\n\b\r\b\u000e\b.\u0003\t\u0006\t",
    "2\n\t\r\t\u000e\t3\u0003\t\u0003\t\u0002\u0002\n\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\u0002\u000f\b\u0011\t\u0003\u0002",
    "\u0005\u0003\u00022;\u0004\u0002C\\c|\u0005\u0002\u000b\f\u000f\u000f",
    "\"\"9\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0003\u0013\u0003\u0002\u0002",
    "\u0002\u0005\u0015\u0003\u0002\u0002\u0002\u0007\u0017\u0003\u0002\u0002",
    "\u0002\t\u001d\u0003\u0002\u0002\u0002\u000b!\u0003\u0002\u0002\u0002",
    "\r)\u0003\u0002\u0002\u0002\u000f,\u0003\u0002\u0002\u0002\u00111\u0003",
    "\u0002\u0002\u0002\u0013\u0014\u0007?\u0002\u0002\u0014\u0004\u0003",
    "\u0002\u0002\u0002\u0015\u0016\u0007=\u0002\u0002\u0016\u0006\u0003",
    "\u0002\u0002\u0002\u0017\u0018\u0007h\u0002\u0002\u0018\u0019\u0007",
    "n\u0002\u0002\u0019\u001a\u0007q\u0002\u0002\u001a\u001b\u0007c\u0002",
    "\u0002\u001b\u001c\u0007v\u0002\u0002\u001c\b\u0003\u0002\u0002\u0002",
    "\u001d\u001e\u0007k\u0002\u0002\u001e\u001f\u0007p\u0002\u0002\u001f",
    " \u0007v\u0002\u0002 \n\u0003\u0002\u0002\u0002!&\u0005\r\u0007\u0002",
    "\"%\u0005\r\u0007\u0002#%\t\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002",
    "$#\u0003\u0002\u0002\u0002%(\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002",
    "\u0002&\'\u0003\u0002\u0002\u0002\'\f\u0003\u0002\u0002\u0002(&\u0003",
    "\u0002\u0002\u0002)*\t\u0003\u0002\u0002*\u000e\u0003\u0002\u0002\u0002",
    "+-\t\u0002\u0002\u0002,+\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002",
    "\u0002.,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/\u0010\u0003",
    "\u0002\u0002\u000202\t\u0004\u0002\u000210\u0003\u0002\u0002\u00022",
    "3\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u000234\u0003\u0002\u0002",
    "\u000245\u0003\u0002\u0002\u000256\b\t\u0002\u00026\u0012\u0003\u0002",
    "\u0002\u0002\u0007\u0002$&.3\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function VariableDeclarationLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

VariableDeclarationLexer.prototype = Object.create(antlr4.Lexer.prototype);
VariableDeclarationLexer.prototype.constructor = VariableDeclarationLexer;

VariableDeclarationLexer.EOF = antlr4.Token.EOF;
VariableDeclarationLexer.T__0 = 1;
VariableDeclarationLexer.T__1 = 2;
VariableDeclarationLexer.T__2 = 3;
VariableDeclarationLexer.T__3 = 4;
VariableDeclarationLexer.ID = 5;
VariableDeclarationLexer.NUMBER = 6;
VariableDeclarationLexer.WS = 7;


VariableDeclarationLexer.modeNames = [ "DEFAULT_MODE" ];

VariableDeclarationLexer.literalNames = [ null, "'='", "';'", "'float'", 
                                          "'int'" ];

VariableDeclarationLexer.symbolicNames = [ null, null, null, null, null, 
                                           "ID", "NUMBER", "WS" ];

VariableDeclarationLexer.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "ID", 
                                       "LETTER", "NUMBER", "WS" ];

VariableDeclarationLexer.grammarFileName = "VariableDeclaration.g4";



exports.VariableDeclarationLexer = VariableDeclarationLexer;


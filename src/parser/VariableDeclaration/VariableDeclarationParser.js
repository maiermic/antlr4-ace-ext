// Generated from grammar/VariableDeclaration.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var VariableDeclarationListener = require('./VariableDeclarationListener').VariableDeclarationListener;
var grammarFileName = "VariableDeclaration.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\t\u0011\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u000b\n\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0002\u0002\u0004\u0002",
    "\u0004\u0002\u0003\u0003\u0002\u0005\u0006\u000f\u0002\u0006\u0003\u0002",
    "\u0002\u0002\u0004\u000e\u0003\u0002\u0002\u0002\u0006\u0007\u0005\u0004",
    "\u0003\u0002\u0007\n\u0007\u0007\u0002\u0002\b\t\u0007\u0003\u0002\u0002",
    "\t\u000b\u0007\b\u0002\u0002\n\b\u0003\u0002\u0002\u0002\n\u000b\u0003",
    "\u0002\u0002\u0002\u000b\f\u0003\u0002\u0002\u0002\f\r\u0007\u0004\u0002",
    "\u0002\r\u0003\u0003\u0002\u0002\u0002\u000e\u000f\t\u0002\u0002\u0002",
    "\u000f\u0005\u0003\u0002\u0002\u0002\u0003\n"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'='", "';'", "'float'", "'int'" ];

var symbolicNames = [ null, null, null, null, null, "ID", "NUMBER", "WS" ];

var ruleNames =  [ "declaration", "type" ];

function VariableDeclarationParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

VariableDeclarationParser.prototype = Object.create(antlr4.Parser.prototype);
VariableDeclarationParser.prototype.constructor = VariableDeclarationParser;

Object.defineProperty(VariableDeclarationParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

VariableDeclarationParser.EOF = antlr4.Token.EOF;
VariableDeclarationParser.T__0 = 1;
VariableDeclarationParser.T__1 = 2;
VariableDeclarationParser.T__2 = 3;
VariableDeclarationParser.T__3 = 4;
VariableDeclarationParser.ID = 5;
VariableDeclarationParser.NUMBER = 6;
VariableDeclarationParser.WS = 7;

VariableDeclarationParser.RULE_declaration = 0;
VariableDeclarationParser.RULE_type = 1;

function DeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VariableDeclarationParser.RULE_declaration;
    return this;
}

DeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationContext.prototype.constructor = DeclarationContext;

DeclarationContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

DeclarationContext.prototype.ID = function() {
    return this.getToken(VariableDeclarationParser.ID, 0);
};

DeclarationContext.prototype.NUMBER = function() {
    return this.getToken(VariableDeclarationParser.NUMBER, 0);
};

DeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof VariableDeclarationListener ) {
        listener.enterDeclaration(this);
	}
};

DeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof VariableDeclarationListener ) {
        listener.exitDeclaration(this);
	}
};




VariableDeclarationParser.DeclarationContext = DeclarationContext;

VariableDeclarationParser.prototype.declaration = function() {

    var localctx = new DeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, VariableDeclarationParser.RULE_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 4;
        this.type();
        this.state = 5;
        this.match(VariableDeclarationParser.ID);
        this.state = 8;
        _la = this._input.LA(1);
        if(_la===VariableDeclarationParser.T__0) {
            this.state = 6;
            this.match(VariableDeclarationParser.T__0);
            this.state = 7;
            this.match(VariableDeclarationParser.NUMBER);
        }

        this.state = 10;
        this.match(VariableDeclarationParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VariableDeclarationParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;


TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof VariableDeclarationListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof VariableDeclarationListener ) {
        listener.exitType(this);
	}
};




VariableDeclarationParser.TypeContext = TypeContext;

VariableDeclarationParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, VariableDeclarationParser.RULE_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 12;
        _la = this._input.LA(1);
        if(!(_la===VariableDeclarationParser.T__2 || _la===VariableDeclarationParser.T__3)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.VariableDeclarationParser = VariableDeclarationParser;

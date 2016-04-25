// Generated from grammar/VariableDeclaration.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by VariableDeclarationParser.
function VariableDeclarationListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

VariableDeclarationListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
VariableDeclarationListener.prototype.constructor = VariableDeclarationListener;

// Enter a parse tree produced by VariableDeclarationParser#declaration.
VariableDeclarationListener.prototype.enterDeclaration = function(ctx) {
};

// Exit a parse tree produced by VariableDeclarationParser#declaration.
VariableDeclarationListener.prototype.exitDeclaration = function(ctx) {
};


// Enter a parse tree produced by VariableDeclarationParser#type.
VariableDeclarationListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by VariableDeclarationParser#type.
VariableDeclarationListener.prototype.exitType = function(ctx) {
};



exports.VariableDeclarationListener = VariableDeclarationListener;
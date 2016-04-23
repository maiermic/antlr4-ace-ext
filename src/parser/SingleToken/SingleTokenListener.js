// Generated from grammar/SingleToken.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SingleTokenParser.
function SingleTokenListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SingleTokenListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SingleTokenListener.prototype.constructor = SingleTokenListener;

// Enter a parse tree produced by SingleTokenParser#start.
SingleTokenListener.prototype.enterStart = function(ctx) {
};

// Exit a parse tree produced by SingleTokenParser#start.
SingleTokenListener.prototype.exitStart = function(ctx) {
};



exports.SingleTokenListener = SingleTokenListener;
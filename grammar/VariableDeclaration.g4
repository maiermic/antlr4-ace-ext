grammar VariableDeclaration;

declaration : type ID ('=' NUMBER)? ';' ;

type : 'float' | 'int' ;

ID : LETTER (LETTER | [0-9])* ;
fragment
LETTER : [a-zA-Z] ;

NUMBER : [0-9]+ ;

WS : [ \t\n\r]+ -> skip ;

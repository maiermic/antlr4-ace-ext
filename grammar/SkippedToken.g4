grammar SkippedToken;

start : TOKEN* ;

SPACES  : ' '+ -> skip ;

TOKEN : 'token' ;
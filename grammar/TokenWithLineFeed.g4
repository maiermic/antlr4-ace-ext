grammar TokenWithLineFeed;

start : COMMENT ;

COMMENT : '//' .*? '\n' ;
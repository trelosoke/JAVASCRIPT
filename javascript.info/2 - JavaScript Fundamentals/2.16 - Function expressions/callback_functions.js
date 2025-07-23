'use strict';
ask('Do you agree?', 
	function() {alert('You agreed.')},
	function() {alert('You canceled the execution')}
);

function ask(question, yes, no){
	if(confirm(question)) yes()
	else no();
}
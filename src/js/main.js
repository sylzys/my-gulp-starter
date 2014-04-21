var hideElement = require('./hideElement');
hideElement('#some-id');

function number(n){
	if (n < 0){
		return -1;
	}
}
alert(number(-5));
module.exports.number = number;


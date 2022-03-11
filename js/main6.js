console.log('Welcome to If-Else & Switch Case tutorial');

const age1 = 19;
const age2 = '19';
// const vari = 34;

// == is used to just compare to variables and === is used to compare types and values of both variables
// != is used to just compare to variables and !== is used to compare types and values of both variables

if (age1 === 19) {
	console.log('Age is 19 and both compared variables are of same type');
} else if (age2 == 19) {
	console.log('Age is 19 but both compared variables are not of same type')
} else {
	console.log('Age is not 19');
}



if (age1 !== 19) {
	console.log('Age is not 19 and both compared variables are of same type');
} else if (age2 != 19) {
	console.log('Age is not 19 but both compared variables are not of same type')
}


// Trick to check if a variable exist or not
if (typeof vari !== 'undefined') {
	console.log('vari is defined and it exist');
} else {
	console.log('vari is not defined and it don\'t exist');
}


// Use && as AND , || as OR

let age = 20;
let wantToDrive = false;

if (wantToDrive && age>=18) {
	console.log('You can drive');
} else {
	console.log('You cannot drive');
}


//////////// Ternary Operator (Single Line If-Else) ////////////

console.log(age==45?'Age is 45':'Age is not 45');


//////////// Switch Case ////////////

switch(age) {
	case 18:
		console.log('You are 18');
		break;
	case 28:
		console.log('You are 28');
		break;
	default:
		console.log('Your age is unknown');
		break;
}
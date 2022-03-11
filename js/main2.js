/////////// Primitive DataTypes ///////////

// String
var name = 'Vaibhav';
console.log('my string is ' + name);
console.log('Data type is ' + (typeof name));

// Number
let age = 16;
console.log('my number is ' + age);
console.log('Data type is ' + (typeof age));

// Boolean
let isGenius = true;
console.log('Developer is `Genius`. --> ' + isGenius);
console.log('Data type is ' + (typeof isGenius));

// Null
let nullVar = null;
console.log(nullVar);
console.log('Data type is ' + (typeof nullVar));

// Undefined
let undef = undefined;
console.log(undef);
console.log('Data type is ' + (typeof undef));

/////////// Referance DataTypes ///////////

// Array
let array = [1, 2, 3, 4]
console.log(array);
console.log('Data type is ' + (typeof array));

// Object Literals
let marks = {
	Vaibhav: 98,
	Aditya: 95,
	Arnav: 97,
}
console.log(marks);
console.log('Data type is ' + (typeof marks));

// Function
function findName() {
	// body...
}
console.log(findName);
console.log(typeof findName);

// Date
let date = new Date();
console.log(date);
console.log('Data type is ' + (typeof date));
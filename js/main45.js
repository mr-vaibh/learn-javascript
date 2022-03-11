console.log('JavaScript Symbols');

// Symbols
// Symbol is always unique object
// sym = new Symbol(param) ----> This is wrong !!
// sym = Symbol(param) ----> This is right :)

const sym1 = Symbol('My Identifier');
const sym2 = Symbol('My Identifier');

console.log('Symbol is', sym1);
console.log('Type of Symbol is ' + typeof sym1);

console.log(sym1 === sym2);  // False

const k1 = Symbol('identifier for k1');
const k2 = Symbol('identifier for k2');

myObj = {};
myObj[k1] = 'Tom';
myObj[k2] = 'Robert';
myObj['name'] = 'Good Boy'

console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);

// Symbols are ignored in for-in loop
for (const key in myObj) {
	console.log(key, myObj[key]);
}

// Convert object into JSON
let myObjJSON = JSON.stringify(myObj);
console.log(myObjJSON);
console.log('We are in 7th tutorial, discussing about arrays');

let marks = [12, 23, 34, 45, 56, 67, 78, 89, 90];
let fruits = ['Orange', 'Apple', 'Pineapple'];
let mixed = ['str', 89, [3, 5]];

// Alternate way to manke array
let array = new Array(23, 123, 221, 'Orange');
console.log(array);

console.log(array.length);

// To check if a variable is an array, returns true or false
console.log(Array.isArray(array));



console.log(marks);

// .indexOf(element) function is used to get index to passed element
let value = marks.indexOf(34)
console.log(value);


//////////// Mutating or Modiifying arrays ////////////

// Use .push(element) to add passed element at the end of the array
marks.push(5);
console.log(marks);

// Use .unshift(element) to add passed element at the first place of the array
marks.unshift(11);
console.log(marks)

marks.push('positivity');
marks.push('negativity');

// Use .pop() {with no params of course} to remove last element from an array
marks.pop();
console.log(marks);

// Use .shift() {with noparams passed of course} to remove first element from an array
marks.shift();
console.log(marks);

// Use .splice(i, n) function to remove n elements from i index
marks.splice(2, 3);
console.log(marks);

// Use .reverse() function to reverse the array
marks.reverse();
console.log(marks);



let marks2 = [13, 24, 35, 46, 57, 68, 79, 80];

// Use .concat(element) to add passed element in an array
// Note: If element is itself an array, then elements of passed array will be added in original array
marks = marks.concat(marks2);
console.log(marks);


//////////// Objects ////////////

let myObj = {
	name: 'VaiBH',
	age: 16,
	isActive: true,
	marks: [12, 23, 34, 45, 56, 67, 78, 90],
};

console.log(myObj);

// Accessing keys
console.log(myObj.age);

// Alternate Method
console.log(myObj['age']);
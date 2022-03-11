//////////////// Type Conversion and Coercion ////////////////

// Type Conversion
console.log('Welcome here');

let myVar = 1183;
myVar = String(myVar);
console.log(myVar, (typeof myVar));

let booleanVar = true;
booleanVar = String(booleanVar);
console.log(booleanVar, (typeof booleanVar));

let dateVar = new Date();
dateVar = String(dateVar);
console.log(dateVar, (typeof dateVar));

let array = String([1, 2, 3, 4, 5]);
console.log(array.length, (typeof array));

// toString is also same as String() function
let anyVar = 230;
anyVar = anyVar.toString();
console.log(anyVar, (typeof anyVar));

let numToStr1 = '1183';
let numToStr2 = true;
numToStr1 = Number(numToStr1);
numToStr2 = Number(numToStr2);
console.log(numToStr1, (typeof numToStr1));
console.log(numToStr2, (typeof numToStr2));

let number1 = '3.14159265358979';
let number2 = '3.14159265358979';
number1 = parseInt(number1);
number2 = parseFloat(number2);
console.log(number1, (typeof number1));
console.log(number2, (typeof number2));
console.log(number2.toFixed(4), (typeof number2));


// Type Coercion
let mystr = Number('12');
let myNum = 23;

console.log(mystr+myNum);
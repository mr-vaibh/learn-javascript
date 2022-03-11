console.log('Arrow function in JS');

// ARROW FUNCTIONS

// Creating a regular function
// const func = function () {
// 	console.log('This is a regular function');
// }

// Converting it to an arrow function
const func = ()=>{
	console.log('This is a regular function');
}
func();

// // Function returning something
// const greet = function () {
// 	return 'Good Morning';
// }

// One liners do not require braces and return keyword
// one line will automatically return
let greet = () => 'Good Morning';

// You need to put paranthesis to return object
greet = () => ({name:'Tom'});

// Single parameter do not need perenthesis
// but you will have to put parenthesis if there are multiple parameters
greet = name => "Good Morning " + name;
greet = (name, age) => name + " is " + age + " years old";

console.log(greet('Tom', 55));
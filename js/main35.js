console.log('Regular Expression in JS');

// Regular Expression Literal
let reg = /ronaldo/;  // This is a regular expression
reg = /ronaldo/g;  // g meanes global
reg = /ronaldo/i; // means case insensitivity
reg = /ronaldo/ig; // using both flags

console.log(reg);
console.log(reg.source);

let str = 'ronaldo is the best player in the world - Cristiano Ronaldo';
/* Function to match expressions 
1.) exec() - this function will return an array for match or null for no match
*/

// We can use multiple exec() with global flag
let result = reg.exec(str);
console.log(result);

result = reg.exec(str);
console.log(result);

// If result would null, below 2 console logs would throw error
// to avoid that we are using if statement
if (result) {
    console.log(result.index);
    console.log(result.input);
}

/* 2.) test() - returns true or false
To check if an expression is in string or not
do not use flags in test()
*/
reg = /ronaldo/;
let check = reg.test(str);
console.log(check);


/* 3.) match() - It will return an array of results or null */
// reg.match(str) ----> This is wrong syntax!!!
// str.match(reg) ----> This is right syntax :)
reg = /ronaldo/ig;
let result2 = str.match(reg);
console.log(result2);

/* 4.) search() - Return index of first match else -1 */
// reg.search(str) ----> This is wrong syntax !!!
// str.search(reg) ----> This is right syntax :)
// Note: global flag is used, but only index of only first matches will be returned
let result3 = str.search(reg);
console.log(result3);

/* 5.) replace() - Returns new replaced string with all the replacements */
// Note: global flag is used, so all matches will be replaced
let result4 = str.replace(reg, 'Dhoni');
console.log(result4);
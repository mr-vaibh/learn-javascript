console.log('Regular Expressions: Metacharactors');

let regex = /anubhav/i;

/* Lets look into some metacharacters symbols */

// to check if the string starts with expression `regex` or not
regex = /^anub/i;

// to check if the string ends with expression `regex` or not
regex = /anub$/i;

// to check then exactly counted (number of dots) character is in between
regex = /anu.hav/i;    // one character
regex = /anu..av/i;    // two character
regex = /a....av/i;    // three character
regex = /......./i;    // all character

// to check when any character is in between first letter and other expression
regex = /a*boy/i;

// ? after character means that character is optional
regex = /an?ubh?av/i;

// use backslash to match exact character
regex = /anu\*hav/;

const str = 'Anubhav is a boy';

let result = regex.exec(str);
console.log('The result from exec is', result);

if (regex.test(str)) {
    console.log(`The string '${str}' matches the expression '${regex.source}'`);
} else {
    console.log(`The string '${str}' does not matches the expression '${regex.source}'`);
}
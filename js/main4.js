////////// String Manipulation //////////

console.log('Welcome Mr.VaiBH');

const name = 'Vaibhav';
const greet = 'Good Afternoon';

console.log(greet, name);

let html;

html = '<h1>This is the heading</h1>'+
		'<p>This is a paragraph.</p>';

// .concat(element1, element2,...)  function is used to add some other strings to existing string
html = html.concat('this', 'string ', 'will be added');
console.log(html);
// .length returns the length of string
console.log(html.length);
// .toLowerCase() is a function which formats a string to lowercase
console.log(html.toLowerCase());
// .toUpperCase() is a function which formats a string to uppercase
console.log(html.toUpperCase());


////////// Indexing //////////

// Indexes
console.log(html[1]);

// .charAt(index) is same as string[index]
console.log(html.charAt(1));

// .indexOf(element) is a function which returns the index of the element passed
// Note: if the element passed is not present in the string, it returns -1
console.log(html.indexOf('This'));

// .lastIndexOf(element) is same as .indexOf() but returns index from last
console.log(html.lastIndexOf('This'));

// .endsWith(element) returns true if the string ends with passed element, else false
console.log(html.endsWith('added'));

// .includes(element) returns true if passed element is present in string, else false
console.log(html.includes('will'));

// .substring(index1, index2) returns the sliced string from index1 to index2
console.log(html.substring(1,6));

// .slice(index) returns the sliced string
console.log(html.slice(-1));
console.log(html.slice(-4, -1));
console.log(html.slice(-4));
console.log(html.slice(0, 6));

// .split(element) returns an array by splitting the string from passed element
console.log(html.split(' '));

// .replace(element1, element2) replace the element1 by element2 in a string
// Note: Only replace the first occurance
console.log(html.replace('This', 'it'));



// Use `` to use variables in running between string
// It is same as f'' in python
let fruit1 = 'Orange';
let fruit2 = 'Apple';
let myHtml = `<br /><br /><br />Hello ${name}
			 <h1>This is heading</h1>
			 <p>You like ${fruit1} and ${fruit2}</p>
			 `;

document.body.innerHTML += myHtml;
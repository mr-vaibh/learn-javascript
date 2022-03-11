console.log('Welcome here ! Let\'s start making website');

let a = document;

console.log(a);

a = document.all;
console.log(a);

/* window.document.all is a kind of array,
but not actually an array 

Hence, below code will throw TypeError: a.forEach is not a function

a = document.all;
a.forEach(function(element) {
	console.log(element);
});

*/

//////// to use forEach() function, use following way
// Manking an array out of document and then using forEach function
a = document.all;
array = Array.from(a);

array.forEach(function(element) {
	console.log(element);
});

// Other very useful keys

a = document.body;
console.log(a);

a = document.forms;
a1 = document.forms[0];
console.log(a1);
console.log(a);

a = document.links;
a1 = document.links[1];
a1_href = document.links[1].href;
a1_toString = document.links[1].toString();
a1_text = document.links[1].text;
console.log(a);
console.log(a1);
console.log(a1_href);
console.log(a1_toString);
console.log(a1_text);
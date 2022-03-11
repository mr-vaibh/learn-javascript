console.log('Creating, Removing and Replacing Elements');


////////// To Add Element //////////
let element = document.createElement('li');

// Add a class name to the li element
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title', 'li');
element.innerHTML = '<b>THIS</b>'

let ul = document.querySelector('ul.this')
ul.appendChild(element)
console.log('ul');
console.log(element);


////////// To Replace Element //////////
let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
tnode = document.createTextNode('Replaced list to heading');
elem2.appendChild(tnode);
element.replaceWith(elem2);


////////// To Replace Child Element //////////
let myul = document.getElementById('ul');
myul.replaceChild(element, document.getElementById('fui'));


////////// To Remove Element //////////
myul.removeChild(document.getElementById('lui'));


////////// Some ther functions //////////

let pr = elem2.getAttribute('id');
console.log(elem2, pr);


pr = elem2.hasAttribute('href');
console.log(elem2, pr);


elem2.removeAttribute('title');
console.log(elem2, pr);


elem2.setAttribute('title', 'myelem2Title');
console.log(elem2, pr);
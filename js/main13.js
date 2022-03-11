console.log('Welcome to DOM');

let cont = document.querySelector('.dummy');
cont = document.querySelector('.container');
console.log(cont.childNodes);
console.log(cont.children);

let nodeName = cont.childNodes[1].nodeName;
console.log(nodeName);


/* Node Types
1 ----> Element
2 ----> Attribute
3 ----> Text Node
8 ----> Comment
9 ----> Document
10 ----> DOCTYPE
*/

let nodeType = cont.childNodes[1].nodeType;
console.log(nodeType);



let container = document.querySelector('div.container');

console.log(container.children[1].children[0].children);



console.log(container.firstChild);
console.log(container.firstElementChild);

console.log(container.lastChild);
console.log(container.lastElementChild);

console.log(container.childElementCount);

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);
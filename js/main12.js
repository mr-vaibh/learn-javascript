console.log('Element Select');

/*
element selectors :
1. Single element selector
2. Multi element selector
*/

// =================== Single Element Selector ====================================== Multi Element Selector ===================



element = document.getElementById('first');
console.log(element);

a = element.className;
console.log(a);

a = element.childNodes;
console.log(a);

a = element.parentNode;
console.log(a);

a = element.style;
console.log(a);

element.style.color = '#4c85f6';

/*
GoTo - https://www.w3schools.com/jsref/prop_style_fontsize.asp
values of .style.fontSize are:
xx-small, x-small, small, medium, large, x-large, xx-large

smaller, larger, length, %, initial, inherit
*/

element.style.fontSize = '30px';
element.innerText = 'Mr.VaiBH';
element.innerHTML = '<code>Mr.VaiBH</code>';


//////////// QuerySelector ////////////
let div = document.querySelector('#first');
console.log(div);

// Note: if more than one element are of same class, it gives only the first one
class_ = document.querySelector('.child');
console.log(class_);

// Note: if more than one element are of same tag, it gives only the first one
tag = document.querySelector('div');

// below code will only make first div green not all div(s)
tag.style.color = 'green';
console.log(tag);

// =================== Multi Element Selector ===================

let elem = document.getElementsByClassName('child');
elem = document.getElementsByClassName('container');

console.log(elem[0].getElementsByClassName('child'));


// getElementsByTagName()
let tags = document.getElementsByTagName('a');
console.log(tags);

Array.from(tags).forEach(element => {
	element.style.textDecoration = 'none';
	console.log(element);
});
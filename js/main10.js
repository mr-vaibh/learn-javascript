// DOM - Document Object Module

// window Object is a Global object
// So no need to write window again & again

console.log('Welcome, now it\'s time to Start DOM');

let a = window;
console.log(a);

/*
Both works same, no need to write window, because window is a Global object
window.alert('hello VaiBH');
alert('hello VaiBH');
*/

// promt(element) to display input dialogue with label element
name = prompt('Enter your name :')
console.log(name);

// confirm(element) to display confirm dialogue with label element
confirm = confirm('Are you sure you want to submit your name ?');

// innerHeight or window.innerHeight to get height of browser
window_height = window.innerHeight;
console.log(window_height);

// innerWidth or window.innerWidth to get width of browser
window_width = innerWidth;
console.log(window_width);

// scrollX to get how much page is scrolled in X-axis
x = scrollX;
console.log(x);

// scrollY to get how much page is scrolled in Y-axis
y = scrollY;
console.log(y);

// location to get details about url/page related data
page_data = location;
console.log(page_data);

url = location.href;
console.log(url);

// location.toString() returns current url as a string, same as location.href but returns string
url = location.toString();
console.log(url);

// location.reload() is a function used to reload the page
reload = location.reload();

// window.history or history to get history of page
history = window.history;
console.log(history);

// history.go(index) to go forward or backward to the history
history.go(-1); // will go one step back to previous page
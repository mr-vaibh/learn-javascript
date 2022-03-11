console.log('Fetch PI in JavaScript');

let myBtn = document.getElementById('myBtn');
let content = document.getElementById('content');

// Fetching normal text data

// function getData() {
// 	console.log('Started getData');
// 	url = 'data.txt';
// 	fetch(url).then((response)=>{
// 		console.log('Inside first then');
// 		return response.text();
// 	}).then((data)=>{
// 		console.log('Inside second then');
// 		console.log(data);
// 	})
// }

// Fetching JSON Data   (GET request)
function getData() {
	console.log('Started getData');
	url = 'js/employee.json';
	fetch(url).then((response)=>{
		console.log('Inside first then');
		return response.json();
	}).then((data)=>{
		console.log('Inside second then');
		console.log(data);
	})
}

// POST request
function postData() {
	url = 'http://dummy.restapiexample.com/api/v1/create';
	data = 'js/employee.js';
	params = {
		method: 'POST',
		header: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}
	// doing same thing as getData, just passing one more parameter `params` in fetch()
	// the code is same as getData, don't get confused, using single line arrow function
	// single line function do not need parenthesis, braces and return keyword
	fetch(url, params).then(response => response.json()).then(data => console.log(data))
}


console.log('Before running getData()');
getData();
console.log('After running getData()');

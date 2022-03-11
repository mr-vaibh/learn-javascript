console.log('AJAX in one file');


let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
	console.log('You have clicked the fetchBtn');

	// Instantiate an XHR object
	const xhr = new XMLHttpRequest();

	// Open the object
	// xhr.open('GET', 'data.txt', true);
	// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

	// Opening the object with POST Request
	xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
	xhr.getResponseHeader('Content-type', 'application/json');

	// What to do on progress (optional)
	// Generally used when you have to show loader icons
	xhr.onprogress = function () {
		console.log('On progress');
	}

	// Stages of process (optional, very old thing but might helpful)
	/*
	Value |	    State            |   	Description
	---------------------------------------------------------------------------------------------
		0 |   	UNSENT           | 	Client has been created. open() not called yet.
		1 | 	OPENED           | 	open() has been called.
		2 | 	HEADERS_RECEIVED | 	send() has been called, and headers and status are available.
		3 | 	LOADING          | 	Downloading; responseText holds partial data.
		4 | 	DONE             | 	The operation is complete.
	*/
	xhr.onreadystatechange = function () {
		console.log('Ready state is', xhr.readyState);
	}

	// What to do when response is ready
	// It means you are at readyState value 4
	xhr.onload = function () {
		if (this.status === 200) {
			console.log(this.responseText);
		} else {
			console.log('Some error occured !!');

		}
	}

	// send the request
	params = `{"name":"test","salary":"123","age":"23"}`;
	xhr.send(params);

	console.log('We are a done');

}


let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
	console.log('You have clicked the popBtn');

	// Instantiate an XHR object
	const xhr = new XMLHttpRequest();

	// Open the object
	xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

	// What to do when response is ready
	xhr.onload = function () {
		if (this.status === 200) {
			// used very good logic, go and see employee.json for clarity
			let strData = this.responseText;
			let jsonData = JSON.parse(strData);
			let obj = jsonData['data'];
			console.log(obj);

			let list = document.getElementById('list');
			str = '';
			for (key in obj){
				str += `<li>${obj[key].employee_name}</li>`;
			}
			list.innerHTML = str;

		} else {
			console.log('Some error occured !!');

		}
	}

	// send the request
	xhr.send();

	console.log('We are a done, fetching employees');
}
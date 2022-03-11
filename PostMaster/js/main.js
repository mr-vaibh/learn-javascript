console.log(`Let's start coding`);

// Utility functions:
// 1. Utility function to get DOM element from string
function getElementFromString(string) {
	let div = document.createElement('div');
	div.innerHTML = string;
	return div.firstElementChild;
}

// Initialize number of parameters
let addedParamsCount = 0;

// Hide the parameters box initially
const parametersBox = document.getElementById('parametersBox')
parametersBox.style.display = 'none';

// If the user clicks on params box, hide the json box
const paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
	document.getElementById('requestJsonBox').style.display = 'none';
	document.getElementById('parametersBox').style.display = 'block';
});

// If the user clicks on params box, hide the params box
const jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
	document.getElementById('parametersBox').style.display = 'none';
	document.getElementById('requestJsonBox').style.display = 'block';
});

// If the user clicks on Add `+` button, add more parameters
const addParam = document.getElementById('addParam')
addParam.addEventListener('click', () => {
	let params = document.getElementById('params');
	let string = `<div class="form-row my-2">
					<label for="url" class="col-sm-2 col-form-label">Parameter ${addedParamsCount + 2}</label>
					<div class="col-md-4">
						<input type="text" class="form-control" id="parameterKey${addedParamsCount + 2}" placeholder="Enter Parameter ${addedParamsCount + 2} Key">
					</div>
					<div class="col-md-4">
						<input type="text" class="form-control" id="parameterValue${addedParamsCount + 2}" placeholder="Enter Parameter ${addedParamsCount + 2} Value">
					</div>
					<button class="deleteParam btn btn-primary mx-2">-&nbsp;</button>
				</div>`;
	
	// Convert the element string to DOM node
	let paramElement = getElementFromString(string);
	params.appendChild(paramElement);

	// Add event listener to remove the parameter on cliking `-` button
	let deleteParam = document.getElementsByClassName('deleteParam');
	for (const item of deleteParam) {
		item.addEventListener('click', (e) => {
			e.target.parentElement.remove();
		})
	}

	addedParamsCount++;
});

// If user clicks on `submit` button
const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
	// Show please wait in the response box to request patience from the user
	// document.getElementById('responseJsonText').value = 'Please wait.. Fetching response...';
	let responsePrism = document.getElementById('responsePrism')
	responsePrism.innerHTML = "Please wait.. Fetching response...";

	// fetch all values the values user has entered
	let url = document.getElementById('url').value;
	let requestType = document.querySelector("input[name='requestType']:checked").value;
	let contentType = document.querySelector("input[name='contentType']:checked").value;


	// if user has checked params option instead of json, collect all the parameters in an object
	if (contentType === 'params') {
		data = {};
		for (let i = 0; i < addedParamsCount+1; i++) {
			let keyElement = document.getElementById('parameterKey' + (i+1));
			let valueElement = document.getElementById('parameterValue' + (i+1));
			if (keyElement) {
				key = keyElement.value;
				value = valueElement.value;
				data[key] = value;
			}
		}
		data = JSON.stringify(data);
	} else {
		data = document.getElementById('requestJsonText').value;
	}

	// Loagging all values in console for debugging
	console.log('URL is', url);
	console.log('Request type is', requestType);
	console.log('Content type is', contentType);
	console.log('Data is', data);

	// if requestType is GET, ivoke fetch api to create a post request
	if (requestType == 'GET') {
		fetch(url, {
			method: 'GET',
		})
		.then(response=>response.text())
		.then((text)=>{
			responsePrism.innerHTML = text;
			Prism.highlightAll();
		});
	} else if (requestType == 'POST') {
		fetch(url, {
			method: 'POST',
			body: data,
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
		.then(response=>response.text())
		.then((text)=>{
			responsePrism.innerHTML = text;
			Prism.highlightAll();
		});
	}

});
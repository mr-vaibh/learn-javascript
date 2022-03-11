console.log('Let\'s start coding logics for library');

// constructor
function Book(name, author, type) {
	this.name = name;
	this.author = author;
	this.type = type;
}

// Display constructor
function Display() {

}

// Implement the add book function in prototype
Display.prototype.add = function (book) {
	console.log('Adding to DOM');
	let tableBody = document.getElementById('tableBody');
	let uiString = `<tr>
						<td>${book.name}</td>
						<td>${book.author}</td>
						<td>${book.type}</td>
					</tr>`;
	tableBody.innerHTML += uiString;
}

// Implement the clear function in prototype
Display.prototype.clear = function () {
	let libraryForm = document.getElementById('libraryForm');
	libraryForm.reset();
}


// Implement the validate function in prototype
Display.prototype.validate = function (book) {
	if (book.name.length < 2) {
		return false;
	} else {
		return true;
	}
}


// Creating a show alert function
Display.prototype.show = function (alrtType, msgType, message) {
	let msg = document.getElementById('msg');
	msg.innerHTML = `<div class="alert alert-${alrtType} alert-dismissible fade show" role="alert">
						<strong>${msgType} ! </strong>${message}
						<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>`;
	setTimeout(() => {
		msg.innerHTML = ``;
	}, 6000);
}


// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
	console.log('You have submited the libraryForm');

	let name = document.getElementById('bookName').value;
	let author = document.getElementById('author').value;
	let type;

	let fiction = document.getElementById('fiction');
	let novel = document.getElementById('novel');
	let biographies = document.getElementById('biographies');

	if (fiction.checked) {
		type = fiction.value;
	} else if (novel.checked) {
		type = novel.value;
	} else if (biographies.checked) {
		type = biographies.value;
	} else {
		type = 'Unknown';
	}

	if (!author) {
		author = 'Anonymous';
	}

	let book = new Book(name, author, type);
	console.log(book);

	let display = new Display();

	if (display.validate(book)) {
		display.add(book);
		display.clear();
		display.show('success', 'Success', 'New book successfully added');
	} else {
		// Show error to show user
		display.show('danger', 'Error', 'Please enter valid book name');
	}


	e.preventDefault();
}
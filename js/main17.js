console.log('Welcome to new VSCode, learning about Local and Session Storage');

////////////////// LOCAL STORAGE //////////////////
// Local Storage is an object type
console.log(localStorage);
console.log((typeof localStorage));


// Use .setItem(key, item) to add elements in Local Storage
localStorage.setItem('Name', 'Mr.VaiBH');
localStorage.setItem('Name2', 'Mr.Ex');

// Use .getItem(key) to get Item of passed Key
let name = localStorage.getItem('Name');
console.log(name);


// Use .clear() to clear entire local storage
// localStorage.clear();

// Use removeItem(key) to remove a specific key-value from Local Storage
localStorage.removeItem('Name2');

// JSON.stringify(array) will insert array as it is in Local Storage
// If we don't use this function, array will be inserted as a string
let lang = ['Python', 'Java', 'C++', 'PHP'];
localStorage.setItem('Languages', JSON.stringify(lang));

// Use JSON.parse(getItemArray) to convert and show as array
lang = JSON.parse(localStorage.getItem('Languages'));
console.log(lang);


////////////////// SESSION STORAGE //////////////////
// Session Storage is an object type
console.log(sessionStorage);
console.log((typeof sessionStorage));


// Use .setItem(key, item) to add elements in Session Storage
sessionStorage.setItem('Name', 'Mr.VaiBH');
sessionStorage.setItem('Name2', 'Mr.Ex');

// Use .getItem(key) to get Item of passed Key
name = sessionStorage.getItem('Name');
console.log(name);


// Use .clear() to clear entire Session storage
// sessionStorage.clear();

// Use removeItem(key) to remove a specific key-value from Session Storage
sessionStorage.removeItem('Name2');

// JSON.stringify(array) will insert array as it is in Session Storage
// If we don't use this function, array will be inserted as a string
lang = ['Python', 'Java', 'C++', 'PHP'];
sessionStorage.setItem('Languages', JSON.stringify(lang));

// Use JSON.parse(getItemArray) to convert and show as array
lang = JSON.parse(sessionStorage.getItem('Languages'));
console.log(lang);
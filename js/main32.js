console.log('Async await');

// async return a function as promise
// await means to pause function and run rest of the code

// we can easily make a GET or POST request using Async Await Fetch method

async function func(params) {
    console.log('Inside func');
    const response = await fetch('https://api.github.com/users');
    console.log('before REsponse');
    const users = await response.json();
    console.log('users are here');
    
    return users;
}

console.log('Before calling func');

let a = func();
console.log('After calling func');

console.log(a);
a.then(data => console.log(data))

console.log('Last line of file');


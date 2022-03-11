console.log('Destructuring in JavaScript');

let a, b;
[a, b] = [34, 43];

console.log(a, b);

// Array destructuring
[a, b, c, d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log(a, b, c, d);

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log(a, b, c, d);


({a, b, c, ...d} = {a:34, b:345, c:43, d:56, e:57});
console.log(a, b, c, d);

const fruits = ['apple', 'orange', 'banana', 'mangoes'];
[a, b, c] = fruits;
console.log(a, b, c);

// Object Destructuring
laptop = {
    model: 'HP compaq',
    age: '23 days',
    gender: 'Male',
    net: 1233,
    start : () => { console.log('started'); }
}

const {model, age, gender} = laptop;
console.log(model, age, gender);
console.log('Sets in JavaScript');

// Set stores unique values
let mySet = new Set();   // Initialize an empty set
console.log('An emplty set looks like', mySet);

// Adding an element to the set
mySet.add('this');
mySet.add('my name');
mySet.add('this');    // no effect on set, one element can only be added once
console.log(mySet);

// Using Constructor to initialize the set
mySet = new Set([1, 45, 'this', false,  {a:4, b:8}]);

console.log(mySet);

// Get Set Size
let mySetSize = mySet.size;
console.log(mySetSize);

// Check if an element is present in a set or not
let check = mySet.has(45);
console.log(check);

console.log('Before removal', mySet, '. Do mySet has `this` value ? -->', mySet.has('this'));

// Delete an element from set
mySet.delete('this');

console.log(mySet.size);

console.log('After removal', mySet, '. Do mySet has `this` value ? -->', mySet.has('this'));


// Iterating a set
for (const item of mySet) {
    console.log('Item is :', item);
}

// Alternate method
mySet.forEach(item => {
    console.log('Item is :', item);
});


let = mySetArray = Array.from(mySet);
console.log(mySetArray);
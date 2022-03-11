console.log('JavaScript Maps');

// Maps in JavaScript : we can use any type of key or value

const myMap = new Map();
console.log(myMap);

const key1 = 'mystr', key2 = {}, key3 = function(){};

// Setting map values
myMap.set(key1, 'This is a String');
myMap.set(key2, 'This is a blank obj');
myMap.set(key3, 'This is an empty function');
console.log(myMap);

// Getting the values from a Map
let value1 = myMap.get(key1);
let value2 = myMap.get(key2);
let value3 = myMap.get(key3);
console.log(value1);
console.log(value2);
console.log(value3);

// Get the size of the map
console.log(myMap.size);

// You can loop using for..of to get keys and values
for (const [key, value] of myMap) {
	console.log(key, value);
}

// Get only keys
for (const key of myMap.keys()) {
	console.log('key is', key);
}

// Get only values
for (const value of myMap.values()) {
	console.log('value is', value);
}

// You can loop through a map using for each loop
myMap.forEach((value, key) => {
	console.log('Key is', key);
	console.log('Value is', value);
});

// Converting Map to Array
let myArray = Array.from(myMap);
console.log('Map to array is', myArray);

// Converting Map keys to an Array
let myKeysArray = Array.from(myMap.keys());
console.log('Map keys to array', myKeysArray);

// Converting Map values to Array
let myValuesArray = Array.from(myMap.values());
console.log('Map to values array is', myValuesArray);
console.log('For, While, Do While Loops');

// console.log(1);
// console.log(2);
// console.log(3);

//////////// General Loops like for, while, do-while ////////////

for (var i = 1; i < 11; i++) {
	console.log(i);
}


var j = 1;
while (j < 11) {
	console.log(j);
	j++;
	// We can also use j+=1
}


var k = 0;
do {
	console.log(k+1);
	k++;
} while (k < 10);



for (var i = 1; i < 11; i++) {
	console.log(i);
	if (i === 5) {
		i++;
		continue;
	}
}

for (var i = 1; i < 11; i++) {
	console.log(i);
	if (i === 5) {
		break;
	}
}




//////////// Listing Elements of array ////////////

// forEach(function(element){ expression }); is used to go for each element is an array

let array = [12, 23, 34, 45, 56, 67, 78, 89, 90];

array.forEach(function (element) {
	console.log(element);
});

// We can also pass more arguments like index and array
// For eg:

array.forEach(function(element, index, array){
	console.log(element, index, array);
});

console.log('Done');




// Alternate Way using for loop

for (var i = 0; i < array.length; i++) {
	const element = array[i];
	console.log(element);
}

console.log('Done');




let obj = {
	name : 'Vaibhav',
	age : 16,
	type : 'Self taught Developer',
	os : 'MacOS'
}

for (key in obj){
	console.log(`The ${key} of object is ${obj[key]}`);
}

console.log('Done');
console.log('Generator\'s in JavaScript');

// Generators in JavaScript
// 1 - 1Billion

function* numbersGen() {
	let i = 0;

	yield 1;
	yield 2;
	yield 3;
	yield 4;
	while (i < 5) {
		yield i++;
		// yield (i++).toString();
	}
}

const gen = numbersGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

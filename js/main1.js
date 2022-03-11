console.time('Your code took');
console.log('Hi VaiBH');
console.log([12, 23, 34, 45, 56, 67, 78, 89, 90]);
console.log({'name':'VaiBH', 'age':16});
console.table({'name':'VaiBH', 'age':16});
console.warn('Warning h bc. ');
console.timeEnd('Your code took');
console.assert(false, 'Are you serious !!');
console.error('Hey this a manual error.');


const array = [12, 23, 34, 45, 56, 67, 78, 89, 90];
// array = [12, 23, 34, 45, 56, 67, 78, 89, 90, 45];

array.push(45);

console.log(array);
console.log('Date and Time in JS');

let today = new Date();
console.log(today);
console.log(typeof today);

let otherDate = new Date('5-9-2003 04:54:08');
otherDate = new Date('Sept 5 2003');
otherDate = new Date('9/5/2003');
console.log(otherDate);

let a = otherDate.getDate();
a = otherDate.getDay();
a = otherDate.getMonth();
a = otherDate.getFullYear();
a = otherDate.getHours();
a = otherDate.getMinutes();
a = otherDate.getSeconds();
a = otherDate.getTime();
a = otherDate.getMilliseconds();
console.log(a);

otherDate.setDate(11);
otherDate.setMonth(8);
otherDate.setFullYear(2003);
otherDate.setHours(5);
otherDate.setMinutes(9);
otherDate.setSeconds(3);
console.log(otherDate);

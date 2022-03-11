console.log('Mathematical Operations');

let x = 3;
let y = 6;
let z;
z = x + y;
z = x - y;
z = x * y;
z = x / y;
z = x % y;

// Exploring Math object
z = Math;
z = Math.PI;
z = Math.E;
z = Math.round(5.4);  // round off
z = Math.ceil(5.4);   // gives upper value
z = Math.floor(5.4);  // gives lower value
z = Math.abs(5.4);    // modulus function
z = Math.sqrt(5);    // square root
z = Math.pow(2, 3);    // num to the power num
z = Math.max(2, 3, -3, 9, 89, -90);    // maximum number in given set
z = Math.min(2, 3, -3, 9, 89, -90);    // minimum number in given set

z = Math.random();   // any random number in (0,1)
z = 100*Math.random();   // any random number in (0,100)
z = 50 + (100 - 50)*Math.random();   // any random number in (50,100)

/*  Kind of Formula 
a = (0, 1)
a100 = a*100 = (0, 100)
a10_100 = 10 + a*(100 - 10) = (10, 100)

In Short, to generate any num b/w (min,max)
Math.random() * (max - min) + min
Math.floor(Math.random() * (max - min) + min)
Math.ceil(Math.random() * (max - min) + min)
Math.round(Math.random() * (max - min) + min)
*/

console.log(z);
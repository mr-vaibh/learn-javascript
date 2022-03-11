console.log('Scope in JavaScript');

// let and const has BLOCK level Scope
// var has GLOBAL/FUNCTION level Scope

{
var i_v = 200;

console.log(i_v);
}

{
let i_l = 200;

console.log(i_l);
}

function ui() {
	let i = 9;
	return i;
}

console.log(ui(), i_v);

/*
This will cause error, because let has block level scope
i_l is only defined from line 9 to line 13
console.log(ui(), i_l);
*/
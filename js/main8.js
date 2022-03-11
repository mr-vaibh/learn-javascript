console.log('Functions');

/*
// We are using so may lines of code just to greet 3 people
let name1 = 'SkillF';
let name2 = 'Mr.VaiBH';
let name3 = 'Mr.Ex';

console.log(`Happy Birthday ${name1}`);
console.log(`Happy Birthday ${name2}`);
console.log(`Happy Birthday ${name3}`);
*/



////////// Use Functions so that you can greet thousands of people using just one code block //////////

// Below function is returning greet string
// 'Anonymous' is the default value of sender, if sender is undefined or null
function greet(name, sender = 'Anonymous') {
    msg = `Happy Birthday ${name}\nFrom - ${sender}`;
    return msg;
}

let val = greet('SkillF', 'Mr.VaiBH');
console.log(val);




// Alternate method of using function [Anonymous Function]

const mygreet = function(name, sender = 'Anonymous') {
    msg = `Happy Birthday ${name}\nFrom - ${sender}`;
    return msg;
}

let vari = mygreet('Mr.VaiBH', 'Mr.Ex');
console.log(vari);




const obj = {
    name: 'SkillF',
    game: function() {
        return 'Assassin\'s Creed';
    }
}

console.log(obj.game());

////////// Array with functions //////////

array = ['fruit', 'vegetable', 'furniture'];

array.forEach(function(element, index, array) {
	console.log(element, index);
});
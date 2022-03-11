console.log('Object Prototype in JS');

// Object literal
// Object creation always starts from __proto__
// object.__proto__ is a default
let obj = {
    name: 'Anubhav',
    channel: 'Mr.Ex',
    followers: 34000000,
}
console.log(obj);

function Obj(givenName, givenChannel, givenFollowers) {
    this.name = givenName,
    this.channel = givenChannel,
    this.followers = givenFollowers
}

/*
We can define/change our own prototype
Warning: never ever try to change original `Object` prototype
like Object.prototype.getName = function(){...}
*/
Obj.prototype.getName = function () {
    return this.name;
}

Obj.prototype.setName = function (newName) {
    this.name = newName;
}

obj2 = new Obj('Anubhav', 'Mr.Ex', 34000000);
console.log(obj2);
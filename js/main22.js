console.log('Prototype Inheritance');

const proto = {
	slogan: function () {
		return `Here the journey begins`;
	},
	changeName: function (newName) {
		this.name = newName
	}
}

// This creates anubhav Object
let anubhav = Object.create(proto);
anubhav.name = 'Anubhav';
anubhav.role = 'Dancer';
anubhav.changeName('Mr.Ex')

console.log(anubhav);

// Alternate way to create anubhav Object
const anubhav1 = Object.create(proto, {
	name: { value: 'Anubhav', writable: true },
	role: { value: 'Dancer' },
})

anubhav1.changeName('Mr.Ex')
console.log(anubhav1);

// =========================================================================

// Employee Constructor

function Employee(name, salary, experience) {
	this.name = name;
	this.salary = salary;
	this.experience = experience;
}

// ---> Slogan
Employee.prototype.slogan = function () {
	return `The company is the best.\nRegards ${this.name}`;
}

let tom = new Employee('Thomas', 150000, 5);
console.log(tom);
console.log(tom.slogan());

// Programmer
// Learning Inheritence
function Programmer(name, salary, experience, language) {
	// Inheriting common thngs from Employee
	Employee.call(this, name, salary, experience);
	this.language = language;
}
// Inheriting the prototype (Slogan)
Programmer.prototype = Object.create(Employee.prototype);
// Manually set the constructor
Programmer.prototype.constructor = Programmer

let skillef = new Programmer('Skill F', 4000000, 4, 'JavaScript');
console.log(skillef);

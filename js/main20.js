console.log('OOPs, Constructors, Object Literal in JS');

// Object Literal for creating objects
let car = {
    name: 'Maruti 800',
    topSpeed: 180,
    run: function run() {
        console.log('Car is Running');
        // return 'Car is Running';
    }
}
console.log(car);


// We have already seen constructor like these:
// new Date();

// Creating a constructor for cars
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running`);
    }
    this.analyze = function (otherCar) {
        console.log(`${this.name} is slower than ${otherCar.name} by ${Math.ab(this.topSpeed-otherCar.topSpeed)}`);
    }
}

car1 = new GeneralCar('Maruti Alto', 160);
car2 = new GeneralCar('Lamborghini Veneno Roadster', 340);
console.log(car1);
console.log(car2);

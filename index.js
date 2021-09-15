/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/



function Person(atts) {
  this.name= atts.name,
  this.age=atts.age,
 this.stomach=[]
}

 Person.prototype.eat = function(someFood){
 this.stomach.push(someFood);
 if (this.stomach.length>10){
   this.stomach.pop();
    }
 };

 Person.prototype.poop = function(){
   this.stomach.length=0;
 }

Person.prototype.toString=function(){
  return `${this.name}, ${this.age}`;
}

//REMEMBER TO USE A VAR DECLARER LIKE let FOR WHEN MAKING A NEW OBJ CLAIRE CMON!!

let kai=new Person({
  name: 'Kai',
  age: 69
});

// kai.eat('brocoli');
// kai.eat('chiekn');
// kai.eat('posta');
// kai.eat('brocoli');
// kai.eat('chiekn');
// kai.eat('posta');
// kai.eat('brocoli');
// kai.eat('chiekn');
// kai.eat('posta');
// kai.eat('10');
// kai.eat('does it work');
// console.log(kai);

// kai.poop();
// console.log(kai);

console.log(kai.toString());



/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(atts) {
  this.model= atts.model,
  this.milesPerGallon=atts.milesPerGallon,
 this.tank=0,
 this.odometer=0

this.fill = function (gallons){
  return this.tank += gallons; //we must use assignment operator += here bc of how objs work
 }

//  this.drive = function(distance){
//     for (i=distance; i>0; i--){
//      return this.tank-=(this.milesPerGallon/this.tank)
//     }
//     for (i=0; i<distance; i++){
//       return this.odometer++;
//     }
//  }

}


let artemis=new Car({
  model: 'XRD Artemis',
  milesPerGallon: 40
 
});

artemis.fill(69);

//artemis.drive(6900);

console.log(artemis);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby() {
 
}


/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. 'this' calls a variable we have access to within scope
  2. 'this' can be inherited by child objects
  3. Therefore we use 'this.item' to pass values on to inherited childs
  4. 'this' acts as a selector 
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
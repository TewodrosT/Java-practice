// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin (name){
    this.numLegs = 2;
    this.name = name;
};

// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();
var penguin = new Penguin("Jebe");
penguin.sayName();


//Different Code

function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// create your Emperor class here and make it inherit from Penguin
function Emperor (name){
  this.name=name;  
};

Emperor.prototype = new Penguin();


// create an "emperor" object and print the number of legs it has

var emperor = new Emperor ("anyname")
console.log(emperor.numLegs);
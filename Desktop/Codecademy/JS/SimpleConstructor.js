function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit ("happy");
var rabbit3 = new Rabbit ("sleepy");
var output = rabbit1.describeMyself ();
var output = rabbit2.describeMyself ();
var output = rabbit3.describeMyself ();

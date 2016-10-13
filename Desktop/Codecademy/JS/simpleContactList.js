var friends = new Object ();
friends.bill = new Object();
friends.steve = new Object ();

friends.bill.firstName = "Bill";
friends.bill.lastName = "Gates";
friends.bill.number = "(206) 555-5555";
friends.bill.address = ['One Microsoft Way','Redmond','WA','98052'];

friends.steve.firstName = "Steve";
friends.steve.lastName = "Jobs";
friends.steve.number = "(206) 555-4444";
friends.steve.address = ['One Apple Way','San Jose','CA','12345'];

//prints the two objects in the function
var list = function (obj){
    for (var key in obj){
        console.log (key);
    }    
};
var search = function(name) {
    for (var key in friends){
        if(friends[key].firstName === name){
            console.log(friends[key]);
            return friends[key];
        }
    }
};

list (friends);
search ("Steve");
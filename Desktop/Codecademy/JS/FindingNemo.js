var getReview = function (movie) {
    var movie = "Finding Nemo"
    /*prompt("Type in the movie title");*/
    
    switch (movie) {
    case "Toy Story 2":
        console.log('"Toy Story 2" - "Great story. Mean prospector."');
        break;
    case "Finding Nemo":
        console.log ( '"Finding Nemo" - "Cool animation, and funny turtles."');
        break;
    case 'The Lion King':
        console.log( '"The Lion King"-"Great songs."');
        break;
    default:
        console.log ("I don't know!");
        break;
    }
    
};
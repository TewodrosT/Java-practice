var user = prompt ("Who are you?").toUpperCase();

switch (user){
    case 'DODY':
        console.log ("Hey little Bro!");
        break;
    case 'MAME':
        console.log ("Hey sis!");
        break;
    case 'KEBE':
        var abe = prompt ("are you the kebe from the abe kebe? answer yes or no").toUpperCase();
        var geda = prompt("are you the Kibebew geda? answer yes or no").toUpperCase();
        if (abe == "YES" || geda == "YES" )
        {
        console.log ("So you are a celebrity");
        } else {
        console.log ("Sorry, you must have called the wrong number!");
        }
        break;
    case 'TREVOR':
        var input = prompt('as in Trevor Noah, answer Yes or Noah').toUpperCase();
        var country = prompt ('are you from South Africa? answer Yes or No').toUpperCase();
        if (input == "YES" && country == "YES"){
            console.log ("Wow great to meet you!");
        }
        else {
            console.log ("you wish you were the real one!");
        }
        break;
    default:
        console.log ("U are quite unknown hahahaha!!!!");
        break;
}
var numbers = [1,2,3,4,5,8,9];
var hits = [];
var value = prompt("please enter value");

for (var i = 0; i< numbers.length; i++){

	if (numbers[i] > value) {
		hits.push(numbers[i]);
	}
}

if (hits.length === 0){

	console.log("The number you entered is smaller than the values in list");
}
else {
	console.log(hits);
}
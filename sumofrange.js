//Andrew Klump
////february 2015
//CMP237
//sumofrange - two functions which are used to fill an array between two numbers
//and then the other is sums that array



//sums an the total of the array
function sum(array){
	//the total of the array
	var total = 0;

	//the loop which sums the array
	for(var i = 0; i < array.length; i++){
		total += array[i];

	}

//the overall total
return total;


}

//fills an array based on two numbers recieved
function range(bottom, top){
	//array to be filled
	var array = [];

	//fills the array
	for(bottom; bottom <= top; bottom++){
		array.push(bottom);
	}

return array; 	//return filled array
}



///testing sum manually
var array = [1,2,3,4,5,6];

//testing sum and range
console.log(sum(array));


//both equal 21

console.log(sum(range(1,6)));



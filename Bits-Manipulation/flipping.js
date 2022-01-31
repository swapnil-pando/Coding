// Given a number , flip the bits of a number.


let number = 23;

let value = 0;
let count = 0;

while(value < number){
	value+=(1<<count);
	count++;
}


console.log(value - number);
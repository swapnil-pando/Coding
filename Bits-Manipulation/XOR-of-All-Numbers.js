//  Given a number N, the task is to find the XOR of all numbers from 1 to N

// Find the remainder of N by moduling it with 4.
// If rem = 0, then xor will be same as N.
// If rem = 1, then xor will be 1.
// If rem = 2, then xor will be N+1.
// If rem = 3 ,then xor will be 0.


let number = 6;
const rem = number % 4;
let xor;
switch(rem){
	case 0:
		xor = number;
		break;
	case 1:
		xor = 1;
		break;
	case 2:
		xor = number + 1;
		break;
	case 3:
		xor = 0;
		break;

}

console.log(xor);
// This code takes as input an array of integers and displays the two number that has odd occurrences in the array.

// arr[] = {3,4,3,4,5,4,4,6,7,7} --> 5 and 6

// 3 ^ 4 ^ 3 ^ 4 = 0
// 0 ^ 5 ^ 4 ^ 4 = 5
// 5 ^ 6 ^ 7 ^ 7 = 5 ^ 6  --> 101 ^ 110 --> 011   3,3,5,7,7      4,4,4,4,6

// 011 & 101 ---> 001


let arr = [3,4,3,4,5,4,4,6,7,7];

function getTwoOddOccurring(arr){
	let xor_val = 0;
	for(let i of arr){
		xor_val  = xor_val ^ i;
	}
	let sb = xor_val & ~(xor_val - 1);
	let num1 = 0;
	let num2 = 0;
	for(let i of arr){
		if( (i & sb) != 0 )
			num1  = num1 ^ i;
		else
			num2 = num2 ^ i;
	}
	return [num1,num2];

}
console.log(getTwoOddOccurring(arr));




// This code takes as input an array of integers and displays the number that has odd occurrences in the array.

// arr[] = 4,3,4,4,4,5,5
// 4 ^ 3 ^ 4 = 3
// 3 ^ 4 ^ 4 = 3
// 3 ^ 5 ^ 5 = 3

let arr = [4,3,4,4,4,5,5]

function getOneOddOccurring(arr){
	let res = 0;
	for(let i of arr){
		res = res ^ i;
	}
	return res;
}

console.log(getOneOddOccurring(arr));


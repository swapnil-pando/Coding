// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

function getRes(nums){
	let count;
    let res=0;
    for(let i=31;i>=0;i--){
        let mask = 1<<i;
        count = 0;
        for(let j of nums){
            if(j & mask)
                count++;
        }
        if(count % 3 === 1)
            res = res | mask;
        
    }
    return res;
}

let nums = [2,2,3,2];
console.log(getRes(nums));
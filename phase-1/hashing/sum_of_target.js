/*
Two Sum
    ↓
Need previous value + index
    ↓
Map
*/

function sumOfTarget(nums, target){
    let result = [];
    let map = new Map();
    if(nums.length < 1) return [];
    for(let i =0; i<nums.length; i++){
        const needed = target - nums[i];
        console.log(map.has(needed))
        console.log(map.get(needed))
        if(map.has(needed)){
            result.push([map.get(needed),i])
        }
        map.set(nums[i], i)
    }
    return result;

    
}

console.log(sumOfTarget([2,7,11,15], 9))
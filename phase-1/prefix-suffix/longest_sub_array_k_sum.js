/*
Challenge 19 — Longest Subarray With Sum K

Given an array of integers nums and an integer k, return the length of the longest continuous subarray whose sum equals k.

This is intentionally similar to the previous problem, but the required answer is different.

Example :
nums = [1, -1, 5, -2, 3]
k = 3

Answer: 4
*/


function longestSubArrayWithKSum(arr,k){
    let map = new Map();
    map.set(0,-1);
    let prefixSum = 0
    let length = 0;
    for(let i = 0; i< arr.length; i++){
        prefixSum += arr[i]; 
        let needed =  prefixSum - k
        if(map.has(needed)){
            length = Math.max(length, i - map.get(needed) )
        }
        if (!map.has(prefixSum)) {
            map.set(prefixSum, i);
        }
    }
    return length

}
console.log(longestSubArrayWithKSum([1, 5, 5, -2, 2], 3))
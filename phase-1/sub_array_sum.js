

function subarraySum(arr, target){
    let count = 0;
    let map = new Map();
    map.set(0,1);
    let sum =0;

    for(let i=0; i< arr.length; i++){
        sum+=arr[i];
        const needed = sum - target;
        if(map.has(needed)){
            count += map.get(needed)  
        }
        map.set(sum, (map.get(needed)?? 0)+1)
    }
    return count
}

console.log(subarraySum([1, 1, 1], 2))
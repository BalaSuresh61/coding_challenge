
function maxSubArrayLenght(arr, k){
    let left =0;
    let length = 0;
    let sum = 0;

    for(let right = 0; right < arr.length; right++){
        sum +=arr[right]; 
        
        while(sum > k){
            sum -= arr[left]
            left++
        }
        length = Math.max(length, right-left +1);

    }
    return length === 0? -1 : length
}

console.log(maxSubArrayLenght([1, 2, 3, 1, 1, 1], 5))
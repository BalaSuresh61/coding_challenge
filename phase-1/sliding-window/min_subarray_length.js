
function minSubArrayLen(arr, target){
    let left = 0;
    let right = 1;
    let length = Infinity;
    let sum = arr[left] + arr[right];
    while(left < right && right < arr.length){
        if(sum === target){
            length = Math.min(length, right-left+1)
            right ++;
            sum = sum + arr[right]
        }
        else if(sum < target){
            right ++;
            sum = sum + arr[right]
        }else if(sum > right){
            sum = sum - arr[left];
            left ++;
            
        }
    }
    return length
}
// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))

function minSubArrayLength(arr, target){
    let left = 0;
    let length = Infinity;
    let sum =0;
    for(let right =0; right < arr.length; right++){
        sum += arr[right];
        while(sum >= target){
            length = Math.min(length, right-left+1)
            sum -= arr[left];
            left++;
        } 
    }
    return length === Infinity ? 0 : length;
}
console.log(minSubArrayLength([2, 3, 1, 2, 1, 2], 7))

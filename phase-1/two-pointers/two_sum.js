

function twoSum(arr, target){
    let left = 0;
    let right = arr.length -1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === target){
            return [left, right]
        }else if(sum < target){
            left ++;
        }else if(sum > target){
            right --;
        }
    }
    return [-1,-1]

}
console.log(twoSum([1,2,3,6,7,7,9], 14))
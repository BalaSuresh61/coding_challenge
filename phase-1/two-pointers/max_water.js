
function maxWater(arr){
    if(arr.length <= 1) return 0;
    let left =0;
    let right =arr.length -1;
    let maxWater = 0;
    while(left < right){
        maxWater = Math.max(maxWater, Math.min(arr[left], arr[right]) * (right - left));
        if(arr[left] < arr[right]){
            left++
        }else{
            right --
        }
    }
    return maxWater;
}
console.log(maxWater([1,8,6,2,5,4,8,3,7]))
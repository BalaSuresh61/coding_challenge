
function moveZeroToEnd(arr){
    let slow = 0;
    for(let fast = 0; fast < arr.length; fast++){
        if(arr[fast] !=0){
            [arr[slow],arr[fast]] = [arr[fast], arr[slow]]
            slow++
        }
        
    }
    return arr;
}
console.log(moveZeroToEnd([1,2,0,3,0,0,4,0,3,4,0,0,1]))
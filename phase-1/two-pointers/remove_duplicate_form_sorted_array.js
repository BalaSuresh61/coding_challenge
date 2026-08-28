
function countUnique(arr){
    if(arr.lenght === 0) return 0;
    let slow =0;
    for(let fast = 1; fast < arr.length; fast++){
        if(arr[slow] !== arr[fast]){
            slow++;
            arr[slow] = arr[fast]
        }
    }
    return slow+1;
}
console.log(countUnique([1,2,2,3,4,5,5,5,6,7,8,8,9]))

function removeDuplicateFromArray(arr){
    let left =0;
    let right = 0;
    while(right < arr.length){
        if(left !== right && arr[left] === arr[right]){
            arr.splice(right,1);
        }else if(arr[left] !== arr[right]){
            left++;
            right++;
        }else{
            right++;
        }
    }
    return arr;
}
//splice is consume o(n) but using reguler may o(n^2) so must avoid
console.log(removeDuplicateFromArray([1,2,2,3,4,4,5,6,7,8,8,8]))
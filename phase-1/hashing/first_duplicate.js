
function firstDuplicate(arr){
    let set = new Set();
    for(let i = 0; i < arr.length; i++){
        if(set.has(arr[i])){
            return arr[i]
        }
        set.add(arr[i])
    }
    return -1;
}


console.log(firstDuplicate([2, 5, 1, 5, 2]))
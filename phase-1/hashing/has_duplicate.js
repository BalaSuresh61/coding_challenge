

function hasDuplicate(arr){
    let set = new Set();
    for(let i = 0; i < arr.length; i++){
        if(set.has(arr[i])){
            return true
        }
        set.add(arr[i])
    }
    return false
}

console.log(hasDuplicate([4,2,7,2,9,4]))
console.log(hasDuplicate([4,2,7,1,9,0]))


function findFirstUnique(arr){
    let map = new Map();
    for( let i =0; i < arr.length; i++){
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }
    for(let[key,value] of map){
        if(value === 1) return key;
    }
    return -1;
}

console.log(findFirstUnique([4, 5, 1, 2, 0, 4, 5, 1, 2, 0]))
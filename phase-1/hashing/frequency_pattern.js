

function findFrequency(arr){
    let map = new Map();
    let newMap = new Map()
    for(let i = 0; i < arr.length; i++){
        if(newMap.has(arr[i])){
            newMap.set(arr[i], map.get(arr[i]) + 1);
        }else{
            newMap.set(arr[i], 1);
        }
        
        map.set(arr[i],(map.get(arr[i]) ?? 0) + 1)
    }
    return map;
}
console.log(findFrequency([1, 2, 2, 3, 1, 1,5,6,8,9,0]))

function longestUniqueSubarray(arr){
    let set = new Set();
    if(arr.length === 0) return 0;
    let left = 0;
    let length = 1;
    let newLength = 0;
    for(let right = 0; right < arr.length; right ++ ){
        while(set.has(arr[right])){
            set.delete(arr[left]);
            left ++;
        }
        set.add(arr[right]);
        newLength = newLength > set.size ? newLength : set.size
        length = length > (right - left)+1 ? length : (right-left)+1;
    }
    console.log(newLength)
    return length;
}

// console.log(longestUniqueSubarray([2, 3, 1, 2, 1, 3]))
// console.log(longestUniqueSubarray([2]))
// console.log(longestUniqueSubarray([]))

function longestUniqueSubstring(str){
    if(str.length === 0) return 0
    let set = new Set();
    let left = 0;
    let length = 0;
    for(let right = 0; right < str.length; right ++){
        while(set.has(str[right])){
            set.delete(str[left])
            left ++;
        }
        set.add(str[right]);
        const maxLength = right - left +1;
        length = Math.max(length, maxLength);
    }
    return length

}

console.log(longestUniqueSubstring("abcabcbb"))

function longestSubArrayLengthInMap(str){
    if(str.length === 0) return 0;
    let map = new Map();
    let left = 0;
    let length = 0;
    for(let right = 0; right < str.length; right++){
        if(map.has(str[right])){
            left = Math.max(left, map.get(str[right])+1)
        }
        map.set(str[right], right);
        let maxLength = right - left + 1;
        length = Math.max(length, maxLength)
    }
    return length
}

console.log(longestSubArrayLengthInMap("abcabcbb"))

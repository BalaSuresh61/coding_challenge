

function longestAtMostKDistict(str, k){
    let left = 0;
    let map = new Map();
    let length = 0;
    for(let right = 0; right < str.length; right ++){
        map.set(str[right], (map.get(str[right])|| 0) + 1)
        while(map.size > k){
            let count = map.get(str[left]);
            if(count === 1){
                map.delete(str[left]);
            }
            else{
                map.set(str[left], count-1)
            }
            left ++;
        }
        length = Math.max(length, right - left +1)
    }
    return length;

}

console.log(longestAtMostKDistict("aaabbcc",2))
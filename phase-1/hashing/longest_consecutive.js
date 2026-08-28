
function longestConsecutive(arr){
    const set = new Set([...arr]);
    let length = 0;
    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        let count =0;
        if(!set.has(num-1)){
            count = 1
            let consecutive = true
            while(consecutive){
                if(set.has(num+1)){
                    count+=1;
                    num+=1;

                }else{
                    consecutive = false
                }
            }
        }
        length = Math.max(length, count)
    }
    return length
}
console.log(
    longestConsecutive([2, 9, 1, 4, 7, 3, 2, 6, 8, 5])
);
// 8

console.log(
    longestConsecutive([100, 4, 200, 1, 3, 2])
);
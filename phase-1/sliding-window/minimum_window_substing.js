
function minWindowSubstring(s,t){
    if(t.length === 0) return ""
    let left =0;
    let sMap = new Map();
    let tMap = new Map();
    let minLength = Infinity;
    let result ="";
    for(let i = 0; i < t.length; i++){
        tMap.set(t[i], (tMap.get(t[i]) || 0)+1)
    }

    for(let right = 0; right < s.length; right++){
        sMap.set(s[right], (sMap.get(s[right]) || 0)+1)
        if(t.length <= (right -left +1)){
            let isValid = true;
            for(const [key,value] of tMap){
                // console.log(sMap.get(key))
                if(value > (sMap.get(key)|| 0)){
                    isValid = false
                    break;
                }
            }
            if(isValid){
                // minLength = Math.max(minLength, (right-left+1))
                // console.log(`min: ${minLength}, curLen: ${right-left+1}, result: ${minLength > (right-left+1)}`)
                if(minLength > (right-left+1)){
                    minLength = right - left + 1
                    result = s.slice(left,right+1)
                    
                }
                sMap.set(s[left], (sMap.get(s[left])||0)-1)
                sMap.set(s[right], (sMap.get(s[right])||0)-1)
                left++
                right --;
                
            }
        }
    }
    return result


}
console.log(minWindowSubstring("ADOBECODEBANC", "ABC"))
console.log(minWindowSubstring("a", "a"));
console.log(minWindowSubstring("a", "aa"));
console.log(minWindowSubstring("AAABBC", "AABC"));
// console.log();


function minWindow(s,t){
    if(t.length === 0) return ""
    let sMap = new Map();
    let tMap = new Map();

    let formed = 0;
    let required = 0
    let minLength = Infinity;
    let left = 0;
    let result = "";

    for(let i = 0; i< t.length; i++){
        tMap.set(t[i], (tMap.get(t[i]) || 0) + 1)
    }
    required = tMap.size;
    for(let right = 0; right < s.length; right++){
        sMap.set(s[right], (sMap.get(s[right])||0)+ 1);

        if(tMap.has(s[right]) && (sMap.get(s[right])|| 0) === (tMap.get(s[right]) || 0)){
            formed++
        }

        while( required === formed){

            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                result = s.slice(left, right + 1);
            }
            sMap.set(s[left], (sMap.get(s[left])||0) -1 )

            if(tMap.has(s[left]) && (sMap.get(s[left])|| 0) < (tMap.get(s[left]) || 0)){
                formed--
            }
            left ++

        }
    }
    return result;
}

console.log(minWindow("ADOBECODEBANC", "ABC"))
console.log(minWindow("a", "a"));
console.log(minWindow("a", "aa"));
console.log(minWindow("AAABBC", "AABC"));


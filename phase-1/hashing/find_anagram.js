
function findAnagram(str1, str2){
    if(str1.length != str2.length) return false;
    let words = new Map();
    for( let i = 0; i < str1.length; i ++){
        words.set(str1[i], (words.get(str1[i]) || 0) + 1)
        words.set(str2[i], (words.get(str2[i]) || 0) + -1)
    }
    // for(let i = 0; i < str2.length; i++){
    //     words.set(str2[i], (words.get(str2[i]) || 0) + -1)
    // }

    for(let [key,value] of words){
        if(value != 0 ) return false
    }
    return true

}
console.log(findAnagram('listen', 'silent'))
console.log(findAnagram('listen', 'silenl'))

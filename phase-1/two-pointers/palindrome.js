/*
/           → regex starts
[           → character group
a-z         → letters
0-9         → digits
]           → character group ends
/           → regex ends
i           → case insensitive

/^[a-z]$/i.test("A")   // true
/^[a-z]$/i.test("z")   // true

/^[a-z]$/i.test("ab")  // false
/^[a-z]$/i.test("7")   // false
/^[a-z]$/i.test("@")   // false
*/
function chechPalindrome(str){
    if(str.length === 0) return false;
    if(str.length === 1) return true
    let left = 0;
    let right = str.length - 1;

    while(left < right){
        while(left < right && !/[a-zA-Z0-9]/i.test(str[left])){
            left++;
        }
        while(left < right && !/[a-z0-9]/i.test(str[right])){
            right--;
        }
        // console.log(str[left], str[right])
        if(str[left].toLowerCase() !== str[right].toLowerCase()){
            return false
        }
        
        left ++;
        right --;
    }
    return true

}
console.log(chechPalindrome('A man, a plan, a canal: Panama'))
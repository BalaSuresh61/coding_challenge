/*
Challenge 20 — Longest Substring With At Most K Replacements
Given a string str and an integer k, you can replace at most k characters.
Return the length of the longest substring that can be made to contain only one distinct character after at most k replacements.

Example 1
str = "AABABBA"
k = 1

Answer: 4
Because: "AABA"
can become:"AAAA"

by replacing the B.

Example 2
str = "ABAB"
k = 2

Answer:4
Because:"ABAB"
can become:"AAAA"
with 2 replacements.
*/

function characterReplacement(arr, K){
    let map = new Map();
    let length = 0;
    let maxFrequency = 0;
    let left = 0;

    for(let right = 0; right< arr.length; right++){
        map.set(arr[right], (map.get(arr[right])||0) + 1);

        maxFrequency = Math.max(maxFrequency, map.get(arr[right]));
        let replacements = (right - left + 1) - maxFrequency;

        while(replacements > K){
            map.set(arr[left], map.get(arr[left]) - 1);
            left ++;
            maxFrequency = Math.max(maxFrequency, map.get(arr[right]));
            replacements = (right - left + 1) - maxFrequency;
        }
        length = Math.max(length, (right -left + 1))

    }
    return length

}
console.log(characterReplacement("AABABBA", 1))
console.log(characterReplacement("ABAB", 2))
console.log(characterReplacement("AAAB", 0))
console.log(characterReplacement("AAAA", 2))
console.log(characterReplacement("ABCDE", 1))

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

/*
Approach: Using a hashmap to store the alphabets as keys and frequency of occurrence as values, use a SLIDING WINDOW with left and right pointers to determine the size of the sliding window. Within the sliding window, and the formula (size of sliding window)-(frequency of character)<=k, the maximum size of sliding window can be determined as the answer.

Time Complexity: O(26N)
Space Complexity: O(N)
*/

var characterReplacement = function(s, k) {
    // hashmap/dict to store the alphabets as keys and frequency as values
    let alphabet = new Proxy({}, {get: (dict,key) => key in dict ? dict[key]:0})
    let res = 0
    let maxCount = 0
    
    //left pointer
    let l = 0
    let maxFreq = 0
    //right pointer to iterate through every character in the string
    for (let r=0; r<s.length; r++) {
        //add character as key and count as value into hashmap/dict alphabet
        alphabet[s[r]]+=1
        //shift l to the left if max value of 
        // the idea is to maintain the equation (window length) - (max count of alphabet values) <= k
        // while this is not true or (window length) - (max count of alphabet values) > k, shift left pointer to the left
        //maxCount = Math.max(...Array.from(Object.values(alphabet)))
        //console.log(maxCount)
        maxFreq = Math.max(maxFreq, alphabet[s[r]])
        while((r-l+1)-maxFreq>k) {
            alphabet[s[l]]-=1
            l+=1
        }
        res = Math.max(res,r-l+1)
    }
    return res
};
    
/*
Test Cases
INPUT - "ABCDECCF", K=2; EXPECTED OUTPUT - 5
l=0, r=6, 
*/

/*
TIL
1) Remove uncessary steps esp when it comes to repeating steps which is time or memory intensive
    Alws ask yourself if the steps you take is necessary, esp at the end of the code script
    Dont be too fast to run code and submit
2) Making use of a "window" by using left and right pointers to increase size of analysis/array
3) How to access and determine max value of key value pair
    Use Array.from(Object,values(testArray))
    Remb to destructure it before using Math.max bc without destructuring, the input into MAth.max was one list; the function signature for Math.max requires multiple inputs 
*/
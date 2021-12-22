/**
 * @param {string} s
 * @return {number}
 */

/*
Approach: if values in key value pair reaches 2, reset count, Store max count.
Time Complexity: O(N)
Space complexity: O(N)
*/

var lengthOfLongestSubstring = function(s) {
    let alphabet = new Proxy({}, {get: (dict,key) => key in dict ? dict[key]:0})
    let maxChar=0, count=0, l=0
    
    // to account for input which have length of 0 or 1
    if (s.length<=1) {
        return s.length
    }
    
    for (let r=0; r<s.length; r++) {
        alphabet[s[r]] += 1
        count++
        if (alphabet[s[r]] <= 1) {
            maxChar = Math.max(maxChar,count)
        } else {
            while (alphabet[s[r]] > 1) {
                //alphabet = new Proxy({}, {get: (dict,key) => key in dict ? dict[key]:0})
                alphabet[s[l]] -= 1
                l++
                count --
            } 
        }
        console.log(`left char: ${s[l]}, right char: ${s[r]}, max char ${maxChar}`)
    }
    return maxChar
};
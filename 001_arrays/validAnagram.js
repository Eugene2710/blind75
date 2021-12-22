/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
Strategy: 
a. Convert input s and t into array of characters
b. Sort them
c. Using two pointers to compare characters of the same index position, if characters are exactly the same, retrurn true. Else, return false.

Time Complexity: O(N) + O(NlogN) = O(NlogN)
Space Complexity: O(N)

*/


var isAnagram = (s, t) => {
    //let sorted_s = s.sort();
    let char_s = [];
    let char_t = [];
    let sorted_s = [];
    let sorted_t = [];
    if (s.length != t.length) {
        return false
    }
    
    for (let i=0; i<s.length; i++) {
        char_s.push(s[i]);
        char_t.push(t[i]);
    }
    
    sorted_s = char_s.sort();
    sorted_t = char_t.sort();
    for (let i=0; i<s.length; i++) {
        if (sorted_s[i] != sorted_t[i]) {
            return false 
        }
    }
    return true
};


/*
Lesson Learnt
- .sort() has a time complexity of NlogN instead of N
- there is a sort().join function which should be made use of when comparing or meddling with strings
    [...inputString].sort().join("")
- there is no need to specify a return false or true bc return a=b will automatically return false, vice versa
*/
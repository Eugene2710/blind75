/**
 * @param {string} s
 * @return {number}
 */

/*
- Types of substrings -
1) Individual chars: Add strng.length into count
2) Palindromes which have >1 char: 2 pointers - 1 left and 1 right
    Test Cases: palindrome at start of string - "ababc", palindrome at end of string - "dcabab", palindrome at middle of string "cdeababxy"
    
Approach: 
    3 pointers: 1 left, 1 mide, 1 right (This is bc a palindrome only occurs when the letters that start from the middle are the same. 
        2 possible examples: 
        Odd chars - "aba" where the center char is the mirror. if (left pointer = right pointer) {left++;right--;}
        Even chars - "abba" where if (right pointer == left pointer) {right--}
        )
        while(left>0 && right<s.length && mid>0)
        //even char
        if (mid == right) {
            count++
            mid--
            right++
        }
        
        //odd char
        if (left == right) {
            count++
            left--
            right++
        }
*/

var countSubstrings = function(s) {
    let charCount = s.length
    //let left=0, mid=1, right=2
    let count=0
    
    //if length of input, s, is less than 2
    if(s.length <= 1) {
        return charCount
    }
    if(s.length == 2) {
        if(s[0]==s[1]) {
            return 3
        } else {
            return 2
        }
    }
    
    for (let i=1; i<charCount; i++) {
        let left=i-1, right=i+1
        while(left>=0 && right<charCount && s[left]==s[right]) {
            count++
            left--
            right++
        }
            
        let leftTwin=i-1, rightTwin=i 
        while(leftTwin>=0 && rightTwin<charCount && s[leftTwin]==s[rightTwin]) {
            count++
            leftTwin--
            rightTwin++
        }
    }
    
    return (count+charCount)
};

/*
TIL
- Was too focused on completing everything in a single while loop
* Other than breaking down the problem, consider breaking down the types of test cases
    e.g. Type I: odd palindromes, Type II: even palindromes
- To further optimize codes, think of how test cases can be csombine3d after which
    e.g. NeatCode had 2 improvements/differences: 
    a) he intergrated char counts into the odd palindromes since each for loop will loop through the total number of characters
    b) he made the 2 while loops similar enough to define a function call to shorten the main code
*/
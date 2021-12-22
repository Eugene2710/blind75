/**
 * @param {string} s
 * @return {boolean}
 */
/*
Using a stack in an array, pop only close brackets if the last element in array is an open bracket of the similar kind

Time complexity: O(N)
Space complexity: O(N)
*/

var isValid = function(s) {
    //const splitted_S = s.split("")
    let curr_stack = []
    let curr
    
    if (s[0] == ")" || s[0] == "]" || s[0] == "}") {
        return false
    }
    
    for (let i=0; i<s.length; i++) {
        if (s[i] == ")" && curr_stack[curr_stack.length-1]=="(") {
            curr_stack.pop()
        } else if (s[i] == "]" && curr_stack[curr_stack.length-1]=="[") {
            curr_stack.pop()
        } else if (s[i] == "}" && curr_stack[curr_stack.length-1]=="{") {
            curr_stack.pop()
        } else {
            curr_stack.push(s[i])
        }
    }
    return curr_stack.length==0
};

/*
TIL
- Reminder: Set up test cases, and include edge cases, yourself

*/
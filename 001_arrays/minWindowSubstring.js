/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

/* 
Approach: 
2 variables: curr substring, shortest substring, and a set to push t into as a temp set(check if removing characters from array would actually be faster later on)
Right window loops through input string, s, in O(S) time complexity.
Left window starts from index zero position.
If right pointer points to string which does not exist in t, left pointer moves left and nothing get added into the curr substring variable.(O(T time complexity))
IF right pointer points to string which exists in t, while (max value of keys in temp set) or (temp arrauy length is != 0), add char into curr substring. Reduce value of key in temp set or remove character in temp array.
If max value of set is 0 or length of temp array is 0, length of curr substring < length of shortet substr,
shortest siubstring = curr substring
*/

var minWindow = function(s, t) {

    let l=0, r=0
    let tCount = new Proxy({}, {get: (dict,key) => key in dict ? dict[key]:0}) 
    let window = new Proxy({}, {get: (dict,key) => key in dict ? dict[key]:0})
    //assign input t into a hashmap for easier access and comparison of char count
    let have=0, need=0
    for (let i=0; i<t.length; i++) {
        tCount[t[i]]+=1
        need++
    }
    console.log(tCount)
    console.log("need = " + need)
    
    let res=[], resLen=100001
    
    //iterate right pointer through input s and add value to key created in window hashmap
    for (r; r<s.length; r++) {
        let c=s[r] 
        window[c]++
        //if character is in tCount hashmap and window[r]==tCount[r], have+=1
        if (c in tCount && window[c]<=tCount[c]) {
            have++
            console.log("have = " + have)
        }
        //while the number of have values is the same as the number of need values.
        //if length of window < resLen, update resLen and res
        while (have==need) {
            if (r-l+1 < resLen) {
                res = [l,r]
                console.log("res: " + res)
                resLen = r-l+1
            }
            //after the condition of have==need met, push left pointer to the right and check if window can be shrunk
            window[s[l]]-=1
            //if character is in tCount && the value of that char key in window hashmap is lesser than the char key in tCount, have --
            if (s[l] in tCount && window[s[l]]<tCount[s[l]]) {
                have-=1
            }
            l++
        }
        
    }
    if (res == []) {
        return ""
    }
    return s.slice(res[0],res[1]+1)
};
        
/*
* TIL *
if (c in tCount) works for JS as well
*/
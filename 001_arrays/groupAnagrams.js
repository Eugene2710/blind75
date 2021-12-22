/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/*
1) Map arrays into dict with converted string to arrays as keys, and indexes as values
2) sort characters of each string in array 
3) sort 
*/

const sort_strs = inputString => [...inputString].sort().join("")

var groupAnagrams = function(strs) {
    const sorted_strs = strs.map(x => [sort_strs(x), x])
    console.log(sorted_strs)
    
    
};

//https://medium.com/@noamsauerutley/group-anagrams-in-javascript-9fa05b9e0879
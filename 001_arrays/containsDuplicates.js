/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
Method 1: Brute force/Nested loops w time complexity of O(N^2) and sapce complexity of O(1)
Method 2: Map input array into a dictionary of input array, nums. If there is an existing,

*/

var containsDuplicate = function(nums) {
    let mappedArr = {};
    for (let i=0; i<nums.length; i++) {
        if (mappedArr[nums[i]] == null) {
            mappedArr[nums[i]] = i;
        } else {
            return true
        }
        
    }
    return false
};
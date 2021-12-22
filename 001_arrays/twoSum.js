/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
2 methods: 
Method 1 - brute force/naive method of nested loops
Method 2 - map target values to a spearate array. First pointer points to the inputed array, second pointer points to the mapped array
Strategy
1) Sort array
2)
a. if first indexed value >= target value: return None
b. else loop through each index and look to the right of the indexed value. return indexed value

Time Complexity: mapping array - O(N), loop through nums array and check if subtractedArray exists in mappedArray - O(N+1+1). Total = O(N)
Space Complexity: O(2N) = O(N) bc of mappedArray creation
 
*/
var twoSum = function(nums, target) {
    // map nums into a dictionary containing the key and value
    let mappedArray = {};
    let twoSumPair = [];
    
    // map array to dictionary with key value pairs
    for (let i=0; i<nums.length; i++) {
        mappedArray[parseInt(nums[i])]=i;
    }
    // console.log(mappedArray)
    
    // 
    for (let i=0; i<nums.length; i++) {
        let subtractedTarget = target - nums[i]
        // first if condition is to check if the subtraction of target and num[i] exists in the dictionary
        // second if condition is to check if the indexed position of the subtractedTarget is not the same as the index position of that in nums array; check if it was referring to the same indexed value (e.g. target = 4, nums[2] = 2)
        if (mappedArray[subtractedTarget] != null && mappedArray[subtractedTarget] != i ) {
            twoSumPair.push(i, mappedArray[subtractedTarget]);
            
            return console.log(twoSumPair)
        }
    }
    return
}; 
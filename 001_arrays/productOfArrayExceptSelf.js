    /**
 * @param {number[]} nums
 * @return {number[]}
 */

/* 
- Create 1 resultant array with 2 pointers/counters
- First loop to store the product from first index to left of the pointed index. We have the product of every elem before the index.
- Second loop to store the product from last index to the right of pointed index. 
- Within the second loop, mulitply the product to the result from the first loop for each index

Time Comlexity = O(N-1) + O(N-1) = O(2N-2) = O(N)
Space Complexity = O(N)
*/



var productExceptSelf = function(nums) {
    let leftProduct = 1
    let rightProduct = 1
    let result = [1]
    
    // first loop to store the product from first index to left of the pointed index
    for (let i=1; i<nums.length; i++) {
        leftProduct *= nums[i-1]
        result.push(leftProduct)
    }
    
    // second loop to store the product from last index to the right of pointed index
    for (let i=(nums.length-1); i>0; i--) {
        rightProduct *= nums[i]
        result[i-1] *= rightProduct
    }
    
    return result
};

/*
TIL
- when stuck at array question, consider coming up w 2 arrays and the possibiltiy of referring to tboh arrays
*/
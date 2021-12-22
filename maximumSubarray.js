/**
 * @param {number[]} nums
 * @return {number}
 */


 var maxSubArray = function(nums) {
    let leftLimit = 0
    let rightLimit = 0
    let summedNums = []
    
    
    for (let i=0; i<nums.length; i++) {
        rightLimit += nums[i]
        summedNums.push(rightLimit)
    }
    /*
    for (let i=(nums.length-1); i>0; i--) {
        leftLimit 
    }
    */
};
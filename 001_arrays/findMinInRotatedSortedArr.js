/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Test Case

*/

/*
Approach: 
Left limit = 0, right limit = nums.length
Find min of values of index nums.length/2 and index nums.length/2+1. minValue = Math.min(left limit value,right limit value) right limit value)
If value of index nums.length/2 < nums.length/2+1, right limit = nums.length/2
Else left limit = nums.length/2+1
Repeat
*/

var findMin = function(nums) {
    if (nums.length == 1) {
        return nums[0]
    }
    if (nums.length == 2) {
        return Math.min(nums[0], nums[1])
    }
    
    let left = 0, right = nums.length-1, mid = Math.floor(nums.length/2)
    let minVal = Math.min(nums[left], nums[right], nums[mid])
    let arrLen = right+1
    
    while (arrLen > 1) {
        if (nums[mid] > nums[left] && nums[mid] > nums[right]) {
            if (nums[left] < nums[right]) {
                right = mid
                minVal = Math.min(minVal,nums[left])
            } else {
                left = mid
                minVal = Math.min(minVal, nums[right])
                
            }
            
        } else if (nums[mid] < nums[right] && nums[mid] < nums[left]) {
            if (nums[left] > nums[right]) {
                right = mid
                
            } else {
                left = mid
                
            }
            minVal = Math.min(minVal,nums[mid])
        } else {
            if (nums[left] < nums[right]) {
                right = mid
                minVal = Math.min(minVal,nums[left])
            } else {
                left = mid
                minVal = Math.min(minVal,nums[right])
            }
        }
        mid = Math.floor((right-left)/2) + left
        console.log(minVal)
        console.log("mid = " + mid)
        console.log("left = " + left)
        console.log("right = " + right)
        arrLen = Math.ceil(arrLen/2)
    } 
    return minVal
};
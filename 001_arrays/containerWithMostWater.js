/**
 * @param {number[]} height
 * @return {number}
 */

/*
Approach: Using left pointer that starts from left and right pointer which starts from right, if 

Time Complexity: O(N)
Space Complexity: O(1)
*/

var maxArea = function(height) {
    // min volume in question constraints
   let left = 0
   let right = height.length-1
   let maxVol = (Math.min(height[left],height[right]))*(right-left)
   while (left<right) {
       if (height[left] <= height[right]) {
           left++
       } else {
           right--
       }
       maxVol = Math.max((Math.min(height[left],height[right])*(right-left)), maxVol)
   }
   return maxVol
};

/*
TIL 
When in doubt of certain approach due to a test case in mind, write out the test case and then test approach against it instead of allowing it to be a shaky imaginative test case which might not be true

*/
/*
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
1) Sort input array (whenever the original index is not needed and that the the problem has to do w math, sorting might be a good option)
2) Nested for loops with 2 pointers:
    a. Pointer 1 points to the left of the indexed elem. Move pointer 1 from left to right.
    b. Pointer 2 points to the extreme right of the array. Move pointer 2 from right to left.
    
Time Complexity: O(N^2)
Space Complexity: O(N)
*/


var threeSum = function(nums) {
    nums.sort((a,b) => a-b) // beginner note: this is the same as nums.sort(function(a,b) {return a-b}) just that iot uses arrow functions
    // create a set to prevent duplicates; if the question requires duplicates, stick to an array
    let triplets = new Set()
    let left, right
    
    // loop through nums with left pointer pointing to left of index elem, and right pointer pointing to last index elem
    for (let i=0; i<nums.length-2; i++) {
        left = i+1
        right = nums.length-1
        // break loop when left pointer == right pointer
        while (left<right){
            if (nums[i]+nums[left]+nums[right] == 0) {
                triplets.add([nums[i], nums[left], nums[right]].toString())
                left++
            } else if (nums[i]+nums[left]+nums[right] < 0) {
                left++
            } else {
                right--
            }
        }
    }
    // to convert from sets to arrays and integer to string
    let res = []
    for (arrayString of [...triplets]) {
        res.push(arrayString.split(","))
    }            
    return res
};
        
        // [-3,-2,-2,-1,0,1,2,2,2,3]
        // beware of test cases:
        // [0,0,0,0]: Expected - [0,0,0]. Possible output - [[0,0,0],[0,0,0]]
        // [-2,0,1,1,2]: Expected - [[-2,0,2], [-2,1,1]]. Possible output - [-2,0,2]
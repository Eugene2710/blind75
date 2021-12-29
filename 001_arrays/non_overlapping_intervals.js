/**
 * @param {number[][]} intervals
 * @return {number}
 */

/*
e.g. [2,4],[1,3] -> [1,3],[2,4]
[[1,2],[2,3],[3,4],[1,3]] -> 
-- no overlapping condition occurs only when curr first number is >= prev second num && curr second value <= next first value
Approach
- sort the arrays with their first elem and second elem of every index - a sort function is required to be implemented here
- Create a new array where the diff between length of the orginal array and the new array wil be the result/ouput
- Iterate through each index
    If the first elem of current index <= second elem in the last index of new arr && second elem of current index <= second elem of last index of new arr, replace the last index in new arr with the current index in sorted arr 
    Else if the first elem in the current index of sorted arr >= second elem of the last index of new arr, push it to the new arr




*/

var eraseOverlapIntervals = function(intervals) {
    let sorted_intervals = intervals.sort((a,b) => a[0]==b[0] ? a[1]-b[1]:a[0]-b[0]) // have to implement your own sort function bc the sort function compares by characters: e.g. [[1,100],[11,22],[1,11],[2,12]] -> [ [ 1, 100 ], [ 1, 11 ], [ 11, 22 ], [ 2, 12 ] ]
    let temp_intervals = [sorted_intervals[0]]
    
    if (intervals.length == 1) {
        return 0
    }
    
    for (let i=1; i<sorted_intervals.length; i++) {
        let tempArrLength = temp_intervals.length
        if (sorted_intervals[i][0] <= temp_intervals[tempArrLength-1][1] && sorted_intervals[i][1] <= temp_intervals[tempArrLength-1][1]) {
            temp_intervals[tempArrLength-1] = sorted_intervals[i]
        } else if (sorted_intervals[i][0] >= temp_intervals[tempArrLength-1][1]) {
            temp_intervals.push(sorted_intervals[i])
        }
    }
    
    console.log(sorted_intervals)
    console.log(temp_intervals)
    
    return sorted_intervals.length-temp_intervals.length
};

/*
TIL
A refreshal on implementing your own compare function in the sort function using arrow functions and tenary operators
Solve the diff test cases through logic/in your own words before writing out the code. This will allow you to see things from an easier oerspective and solve the targeted problem.
*/
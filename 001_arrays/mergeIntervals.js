/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/*
1) Loop through each array
    if [i+1][j] <= [i][j+1] && [i+1][j+1] >= [i][j] {
        push arr[i][j], arr[i+1][j+1]
        i++
    } else {
        push [i][j], arr[i][j+1]
    }
*/

var merge = function(intervals) {
    let news = []
    
    for (let i=0; i<intervals.length-1; i++) {
        if (intervals[i+1][0]<=intervals[i][1] && intervals[i+1][1]>= intervals[i][0]) {
            news.push([intervals[i][0],intervals[i+1][1]])
            
        } else {
            news.push([intervals[i][0],intervals[i][1]])
        }
    }
    news.push([intervals[intervals.length-1][0],intervals[intervals.length-1][1]])
    
    return news
};


// [[1,3], [5,7], [8,15], [9,13], [10,12]]
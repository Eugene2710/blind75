// purpose of this chunk of code is to investigate the difference between Map () and {}
let testMap = new Proxy({}, {get: (dict,key) => key in dict ? dict[key] : 0})
let inArr = "aabba"
console.log(inArr[2])

let l=0
for (let r=0; r<inArr.length; r++) {
    testMap[inArr[r]] += 1
}
console.log(testMap)
/*
let maxCount = Math.max(...Array.from(Object.values(testMap)))
console.log(maxCount)
*/

let c="a"
if (c in testMap) {
    console.log("present")
}

let grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]

  console.log("Gris length = " + grid[0].length)


let test_arr = [[1,3],[2,3],[3,4],[1,2]]
let sorted_arr = test_arr.sort()
console.log(sorted_arr)
console.log(sorted_arr.length)

let test_arr2 = [[1,100],[11,22],[1,11],[2,12]]
let sorted_arr2 = test_arr2.sort((a,b) => a[0]==b[0] ? a[1]-b[1]:a[0]-b[0])
console.log(sorted_arr2) 
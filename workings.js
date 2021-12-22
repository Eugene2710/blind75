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
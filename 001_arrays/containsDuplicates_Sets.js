/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
Sets are a keyed collection, where their data is ordered using keys.
Sets' elements are iterable in order of insertion, and cannot duplicate data (a double edged sword which can bes useful for preventing duplicates)
    i.e. every item in a Set is unique
Advantages of Sets (mainly faster runtime)
- Search for an item: In arrays, using "indexOf()" or "includes()" to check if item exists is slow
- Deleting an item: In arrays, "splice()" is used. In Sets, items can be deleted by its value
- Inserting items: In arrays, "push()" and "unshift()" are used. In Sets, you can just add like a key value pair
- *Storing NaN: In Arrays, NaN values cannot be found using "indexOf()" or "includes()"
- Removing duplcates: Sets only store unique values 


*/

var containsDuplicate = function(nums) {
    //create new Set from input array. If length of set < or != length of array, there was a duplicate
    let arrToSet = [...new Set(nums)];
    return arrToSet.length != nums.length;
};
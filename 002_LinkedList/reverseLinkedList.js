*/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
Method 1: Iterative method
a. Define a node class
b. Reverse the pointers instead values or reassinging the values into new list/array
    i) Using three pointers: 
    Pointer 1 is the reversed pointing, i.e. next of current node becomes the previous node; this allows the last curr.next to be null eventually which is important to stop the loop
    Pointer 2 is the pointing of the current node, i.e.point current node to the next node 
    Pointer 3 is to update the next node to be the current node so that the while loop condition can work
    
Time Complexity: O(N)
Space complexity: O(1)
*/

class ListNode {
    // come up with value and next instacne properties
    constructor(val, next) {
        this.val = (val ? val:0)
        this.next = (next ? next:null)
    }
}


var reverseList = function(head) {
    let curr = head
    let prev = null
    while (curr) {
        next = curr.next
        curr.next = prev // this allows the last currn.next to be null when linked list has been reversed
        prev = curr
        curr = next
        
    }
    
    return prev
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

/*
** don't understand how would make sense if there are same values in the linked list
    ans: understand that each node is assigned a unique memory; if you compare 2 nodes although they are of the same value, it will return false

Approach: 
Tortoise and hare: Come up w two pointers where the first is the tortoise pointer which moves one position after every loop and the secons is the hare pointer which moves two postiions after every loop. If there is a cycle, the node will converge. Break loop when 

Time Complexity: O(N)
Space Complexity: O(1)

*/
// note: you do not have to declare new class of sorts for this question

var hasCycle = function(head) {
    let tortoise=head, hare=head
    
    while(hare && tortoise) {
        hare = hare.next
        // check if node.next exists; if node.next exists continue, else break and return false since there is no cycle
        if (hare) {
           hare = hare.next 
        } else {
            return false
        }
        tortoise = tortoise.next
        if (tortoise == hare) {
            return true
        }
    }
   return false
};
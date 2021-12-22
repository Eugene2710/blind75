/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

/*
Approach1: iterate till the last node and come up with a .prev: next = curr.next; next.prev = curr
while (curr.next != null): curr = curr.next
for (let i=0;i<n;i++): adjNode = node.prev; node.next = node.next.next

Approach2: iterate till last node while coming up with a count from the first node and moving the rigtt pointer to that list of elem
Once the iteration count is == n, start moving the left pointer since the gap between the last elem and the n number of elem count is the one we are looking for.

Edge Cases to consider:
1) 


*/

var removeNthFromEnd = function(head, n) {
    let right=head, left=head, prev=head, curr=head
    let count=0
    
    while (curr.next != null) {
        curr = curr.next
        count++
        
        if (count >= n) {
            left = left.next
            if (count-n > 0) {
                prev = prev.next
            }
        }
         
    }
    //*think of how to include this above the if loop above to increase speed*
    //if n == length of list
    if (left == prev) {
        head = head.next
    } else {
        prev.next = left.next
    }
    
    return head
    
    return head
};

// question: can a come up w a .prev by extending the class?
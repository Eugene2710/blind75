/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

/*
My Approach: Use a function stack to iterate through each node and swap the left and right children nodes
- If curr, 
- With a temp placeholder, temp=node.left -> node.left = node.right -> node.right=temp
- if
*/

var invertTree = function(root) {
    let node = root
    
    // swap left and right nodes
    if (node) {
        [node.left, node.right] = [node.right, node.left]
        // dfs begins
        if (node.left) {
            invertTree(node.left)
        }
        if (node.right) {
            invertTree(node.right)
        }
    }
    
    return root
};

/*
- TIL -
*always include a null test for root at the start of the recursive fiunction so that the left and right nodes could be read
Remb the swapping trick: instead of assinging a temp node to swap two variables, use [a,b] = [b,a]
*/
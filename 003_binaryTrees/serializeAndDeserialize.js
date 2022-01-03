/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

/*
Approach
- To Serialize, use a dfs function call stack, push the nodes to an array of type string
    Assign null nodes as "N"
- To deserialize, use a dfs function call stack
    if node == "N" {index++; return null}
    else node = Treenode(val) {node.left;node.right}

Test Cases
   3
  2 5
 1 4 6
      7
*/

var serialize = function(root) {
    let serialized = []
    
    // if node is null, append "N" to serialized array, else append the interger to serialized array as type str
    function dfs(root) {
        if (root == null) {
            serialized.push("N")
        } else {
            serialized.push((root.val).toString())
            dfs(root.left)
            dfs(root.right)
        }
    }
   dfs(root)
   return serialized.join(",")
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
   let index = 0
   let serialized = data.split(",")
   
   function dfs() {
       if (serialized[index] == "N") {
           index++
           return null
       } else {
           let node = new TreeNode(Number(serialized[index]))
           index++
           node.left = dfs()
           node.right = dfs()
           return node
       }
   }
   return dfs()
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/

/*
Refreshal
- Convert anything to string on JS using "toString()" 
- Convert anything to number using "Number()"
- Implementation of function without parameters and using global variables
- Remember to inlcude "new" when intializing the implemented class

TIL
- Trace function call stacks in more detail, e.g. function dfs()

*/
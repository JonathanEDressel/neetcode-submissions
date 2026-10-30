/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {

    findNodes(root, arr) {
        if(!root)
            return;
        
        if(!root.left && !root.right)
            return;
        if(!root.left)
            arr.push(root.right.val);
        if(!root.right)
            arr.push(root.left.val)

        this.findNodes(root.left, arr)
        this.findNodes(root.right, arr);

    }   

    getLonelyNodes(root) {
        var arr = [];
        this.findNodes(root, arr);
        return arr;
    }
}

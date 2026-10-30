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
            return node;
        
        node.left = this.findNodes(node.left);
        node.right = this.findNodes(node.right);

        if(node.left && !node.right)
            arr.push(node.left.val);
        else if(!node.left && node.right)
            arr.push(node.right.val);
        
        return node;
    }   

    getLonelyNodes(root) {
        var arr = [];
        this.findNodes(root, arr);
        return arr;
    }
}

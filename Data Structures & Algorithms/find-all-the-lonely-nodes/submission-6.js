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
            return root;
        
        root.left = this.findNodes(root.left, arr);
        root.right = this.findNodes(root.right, arr);

        if(root.left && !root.right)
            arr.push(root.left.val);
        else if(!root.left && root.right)
            arr.push(root.right.val);
        
        return root;
    }   

    getLonelyNodes(root) {
        var arr = [];
        this.findNodes(root, arr);
        return arr;
    }
}

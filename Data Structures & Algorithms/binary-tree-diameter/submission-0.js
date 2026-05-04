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
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    findMax(root, res) {
        if(!root)
            return 0;
        
        var left = this.findMax(root.left, res);
        var right = this.findMax(root.right, res);
        res[0] = Math.max(res[0], left + right)
        return 1 + Math.max(left, right);
    }

    diameterOfBinaryTree(root) {
        var res = [0];
        this.findMax(root, res);
        return res[0];
    }
}

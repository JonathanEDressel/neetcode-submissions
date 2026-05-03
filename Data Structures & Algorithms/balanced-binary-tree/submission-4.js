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
     * @return {boolean}
     */

    travelTree(root) {
        if(!root) 
            return [true, 1];
        var [isBalancedLeft, leftHeight] = this.travelTree(root.left);
        var [isBalancedRight, rightHeight] = this.travelTree(root.right);

        var isBalanced = isBalancedLeft && isBalancedRight && Math.abs(leftHeight - rightHeight) <= 1;
        var height = 1 + Math.max(leftHeight, rightHeight);
        return [isBalanced, height];
    }

    isBalanced(root) {
        var res = this.travelTree(root);
        return res[0];
    }
}

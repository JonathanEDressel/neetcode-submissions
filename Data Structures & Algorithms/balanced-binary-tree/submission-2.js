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
            return [true, 0];
        var [leftBalance, leftHeight] = this.travelTree(root.left);
        var [rightBalance, rightHeight] = this.travelTree(root.right);
        var isBalanced = leftBalance && rightBalance && 
            Math.abs(leftHeight - rightHeight) <= 1;
        var height = 1 + Math.abs(leftHeight - rightHeight);
        return [isBalanced, height];
    }

    isBalanced(root) {
        return this.travelTree(root)[0];
    }
}

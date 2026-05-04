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
     * @param {number} low
     * @param {number} high
     * @return {number}
     */

    findSum(root, low, high) {
        if(!root)
            return 0;

        var left = this.findSum(root.left, low, high);
        var right = this.findSum(root.right, low, high);
        var val = root.val;
        var isValid = root.val <= high && root.val >= low;
        return left + right + (isValid ? root.val : 0);
    }

    rangeSumBST(root, low, high) {
        return this.findSum(root, low, high);
    }
}

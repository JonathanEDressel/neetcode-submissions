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
     * @param {number} targetSum
     * @return {boolean}
     */

    pathFinder(root, targetSum) {
        if(!root)
            return false;
        targetSum -= root.val;
        if(this.pathFinder(root.left, targetSum))
            return true;
        if(this.pathFinder(root.right, targetSum))
            return true;
        return !root.right && !root.left && targetSum === 0;
    }

    hasPathSum(root, targetSum) {
        return this.pathFinder(root, targetSum);
    }
}

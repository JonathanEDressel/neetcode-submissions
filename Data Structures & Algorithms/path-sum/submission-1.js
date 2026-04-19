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

    pathFinder(root, currSum, targetSum) {
        if(!root)
            return false;
        currSum += root.val;
        if(this.pathFinder(root.left, currSum, targetSum))
            return true;
        if(this.pathFinder(root.right, currSum, targetSum))
            return true;
        return !root.right && !root.left && currSum === targetSum;
    }

    hasPathSum(root, targetSum) {
        var curr = 0;
        return this.pathFinder(root, curr, targetSum);
    }
}

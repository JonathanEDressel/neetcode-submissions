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

    dfs(node, sum, target) {
        if(!node)
            return false;
        sum += node.val;
        if(!node.left && !node.right)
            return sum === target;
        if (this.dfs(node.left, sum, target))
            return true;
        if (this.dfs(node.right, sum, target))
            return true;

        return false;
    }

    hasPathSum(root, targetSum) {
        return this.dfs(root, 0, targetSum)
    }
}

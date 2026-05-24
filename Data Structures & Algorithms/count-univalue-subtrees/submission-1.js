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

    dfs(node, count) {
        if(!node)
            return true;

        var left = this.dfs(node.left, count);
        var right = this.dfs(node.right, count);

        if(left && right && (!node.left || node.left.val === node.val) &&
            (!node.right || node.right.val === node.val)) {
            count[0]++;
            return true;
        }
        return false;
    }

    countUnivalSubtrees(root) {
        var count = [0];
        this.dfs(root, count);
        return count[0];;
    }
}

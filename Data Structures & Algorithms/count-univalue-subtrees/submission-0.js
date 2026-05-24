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

    dfs(root, val) {
        if(!root)
            return 0;
        var left = this.dfs(root.left, val);
        var right = this.dfs(root.right, val);
        var res = root.val === val ? 1 : 0;
        return res + left + right;
    }

    countUnivalSubtrees(root) {
        if(!root)
            return 0;
        var val = root.val;
        return this.dfs(root, val) - 1;
    }
}

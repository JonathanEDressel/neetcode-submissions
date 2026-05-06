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
    
    maxPathSum(root) {
        var res = -Infinity;

        function getMax(root) {
            if(!root)
                return 0;
            var left = getMax(root.left);
            var right = getMax(root.right);
            var val = root.val + Math.max(left, right);

            return Math.max(0, val);
        }

        function dfs(root) {
            if(!root)
                return;
            var left = getMax(root.left);
            var right = getMax(root.right);

            res = Math.max(res, root.val + left + right);
            dfs(root.left);
            dfs(root.right);
        }

        dfs(root);
        return res;
    }
}

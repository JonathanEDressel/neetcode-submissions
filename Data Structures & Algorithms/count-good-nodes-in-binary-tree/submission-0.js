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
        
        var res = root.val < val ? 0 : 1;
        val = Math.max(val, root.val);
        res += this.dfs(root.left, val);
        res += this.dfs(root.right, val);
        return res;
    }

    goodNodes(root) {
        return this.dfs(root, root.val);
    }
}

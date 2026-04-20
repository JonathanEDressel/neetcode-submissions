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
     * @return {TreeNode}
     */

    dfs(root) {
        if(!root)
            return;
        root.left = this.dfs(root.right);
        root.right = this.dfs(root.left);
        return root;
    }

    invertTree(root) {
        if(!root)
            return null;
        var invl = root.left;
        var invr = root.right;
        root.left = this.invertTree(invl);
        root.right = this.invertTree(invr);
        return root;
    }
}




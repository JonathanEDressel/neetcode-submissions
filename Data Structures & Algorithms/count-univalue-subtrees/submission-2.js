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

    dfs(root, count) {
        if(!root)
            return true;
        
        var left = this.dfs(root.left, count);
        var right = this.dfs(root.right, count);

        if(left && right 
            && (!root.left || root.left.val === root.val)
            && (!root.right || root.right.val === root.val)) {
                count[0]++;
                return true;
            }
        return false;
    }

    countUnivalSubtrees(root) {
        var count = [0];
        this.dfs(root, count);
        return count[0];
    }
}

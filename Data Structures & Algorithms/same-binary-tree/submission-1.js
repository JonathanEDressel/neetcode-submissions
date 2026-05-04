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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */

    buildTree(p, q) {
        if(!q || !p) {
            return !q && !p;
        }

        var left = this.buildTree(p.left, q.left);
        var right = this.buildTree(p.right, q.right);
        return p.val === q.val && left && right;
    }

    isSameTree(p, q) {
        return this.buildTree(p, q);
    }
}

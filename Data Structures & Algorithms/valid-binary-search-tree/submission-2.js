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
     * @return {boolean}
     */

    validBst(root, left, right) {
        if(!root)
            return true;

        if (!(left < root.val && root.val < right))
            return false;

        return this.validBst(root.left, left, root.val) && this.validBst(root.right, root.val, right);
    }

    isValidBST(root) {
        return this.validBst(root, -Infinity, Infinity);
    }
}

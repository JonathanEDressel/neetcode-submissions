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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */

    isSub(root, sub) {
        if(!root || !sub)
            return !root && !sub;
        var left = this.isSub(root.left, sub.left);
        var right = this.isSub(root.right, sub.right);
        return left && right && root.val == sub.val;
    }
    

    findStart(root, sub, val) {
        if(!root)
            return false;
        var left = false, right = false, res = false;
        right = this.findStart(root.right, sub, val);
        left = this.findStart(root.left, sub, val);
        return left || right || this.isSub(root, sub);
    }

    isSubtree(root, subRoot) {
        var val = subRoot.val;
        return this.findStart(root, subRoot, val);
    }
}

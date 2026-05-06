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
     * @param {number} target
     * @return {number}
     */

    findLowest(root, target) {
        if (!root)
            return Infinity;
        var left = this.findLowest(root.left, target);
        var right = this.findLowest(root.right, target);
        var val = root.val;

        var res = Math.abs(target - left) > Math.abs(target - right) ? right : left;
        res = Math.abs(res - target) > Math.abs(val - target) ? val : res;

        return res;
    }

    closestValue(root, target) {
        return this.findLowest(root, target);
    }
}

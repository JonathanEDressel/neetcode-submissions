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
     * @param {number} k
     * @return {number}
     */

    buildArray(root, arr) {
        if(!root)
            return;
        this.buildArray(root.left, arr);
        arr.push(root.val);
        this.buildArray(root.right, arr);
    }

    kthSmallest(root, k) {
        var arr = [];
        this.buildArray(root, arr);
        return arr[k-1];
    }
}

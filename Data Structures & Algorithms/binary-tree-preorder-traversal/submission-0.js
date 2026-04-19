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
     * @return {number[]}
     */

    preorder(root, arr) {
        if(!root)
            return;
        arr.push(root.val);
        this.preorder(root.left, arr);
        this.preorder(root.right, arr);
    }

    preorderTraversal(root) {
        var arr = [];
        this.preorder(root, arr);
        return arr;
    }
}

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
    traversing(root, arr) {
        if (!root)
            return;
        this.traversing(root.left, arr);
        arr.push(root.val);
        this.traversing(root.right, arr);
    }

    inorderTraversal(root) {
        var arr = [];
        this.traversing(root, arr);
        return arr;
    }
}

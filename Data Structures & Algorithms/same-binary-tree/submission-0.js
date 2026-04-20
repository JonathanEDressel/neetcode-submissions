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

    inorder(root, arr) {
        if(!root)
            return;
        this.inorder(root.left, arr);
        arr.push(root.val);
        this.inorder(root.right, arr);
    }

    isSameTree(p, q) {
        var a1 = [], a2 = [];
        this.inorder(p, a1);
        this.inorder(q, a2);
        if(a1.length !== a2.length)
            return false;
        return JSON.stringify(a1) === JSON.stringify(a2);
    }
}

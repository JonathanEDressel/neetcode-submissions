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

    isBst(arr) {
        for(var i = 1; i < arr.length; i++) {
            if(arr[i-1] >= arr[i])
                return false;
        }
        return true;
    }

    inorder(root, arr) {
        if(!root)
            return;
        this.inorder(root.left, arr);
        arr.push(root.val);
        this.inorder(root.right, arr);
    }

    checkTree(root) {
        if(!root)
            return 0;
        var arr = [];
        this.inorder(root, arr);

        if(this.isBst(arr)) 
            return arr.length;
        var left = this.checkTree(root.left);
        var right = this.checkTree(root.right);
        return Math.max(left, right);
    }

    largestBSTSubtree(root) {
        return this.checkTree(root);
    }
}

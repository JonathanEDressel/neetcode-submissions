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

    inorder(root, arr) {
        if(!root)
            return;
        this.inorder(root.left, arr);
        arr.push(root.val);
        this.inorder(root.right, arr);
    }

    isBst(arr) {
        for(var i = 1; i < arr.length; i++) {
            if(arr[i-1] >= arr[i])
                return false;
        }
        return true;
    }

    findLargest(root) {
        if (!root)
            return 0;
        
        var arr = [];
        this.inorder(root, arr);
        if(this.isBst(arr))
            return arr.length;
        
        var left = this.findLargest(root.left);
        var right = this.findLargest(root.right);

        return left > right ? left : right;
    }

    largestBSTSubtree(root) {
        return this.findLargest(root);
    }
}

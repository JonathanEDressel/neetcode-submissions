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

    bst(root, arr) {
        if(!root)
            return;
        this.bst(root.left, arr);
        arr.push(root.val);
        this.bst(root.right, arr);
    }
    
    isBST(arr) {
        for(var i = 1; i < arr.length; i++) {
            if(arr[i-1] >= arr[i])
                return false;
        }
        return true;
    }

    dfs(root) {
        if(!root)
            return 0;

        var arr = [];
        this.bst(root, arr);

        if(this.isBST(arr))
            return arr.length;
        
        var left = this.dfs(root.left);
        var right = this.dfs(root.right);
        return ((left > right) ? left : right);
    }

    largestBSTSubtree(root) {
        return this.dfs(root);
    }
}

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

    buildInOrder(root, arr) {
        if(!root)
            return;
        this.buildInOrder(root.left, arr);
        arr.push(root.val);
        this.buildInOrder(root.right, arr);
    }

    isValidBST(root) {
        var arr = [];
        this.buildInOrder(root, arr);
        for(var i = 1; i < arr.length; i++)
            if(arr[i] <= arr[i-1])
                return false;

        return true;
    }
}

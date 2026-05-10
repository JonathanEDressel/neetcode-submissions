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

    builder(root, arr, depth) {
        if(!root)
            return;
        
        if (arr.length === depth) {
            arr.push(root.val);
        }
        this.builder(root.right, arr, depth + 1);
        this.builder(root.left, arr, depth + 1);
        return;
    }

    rightSideView(root) {
        var arr = [];
        this.builder(root, arr, 0);
        return arr;
    }
}

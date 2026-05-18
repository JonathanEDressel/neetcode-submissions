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
     * @param {TreeNode} root1
     * @param {TreeNode} root2
     * @param {number} target
     * @return {boolean}
     */

    inorder(root, arr) {
        if(!root)
            return;
        this.inorder(root.left, arr);
        arr.push(root.val);
        this.inorder(root.right, arr);
    }

    postorder(root, arr) {
        if (!root)
            return;
        this.postorder(root.right, arr);
        arr.push(root.val);
        this.postorder(root.left, arr);
    }

    twoSumBSTs(root1, root2, target) {
        var arr1 = [], arr2 = [];
        this.inorder(root1, arr1);
        this.postorder(root2, arr2);
        var track = new Map(); 

        for(var i = 0; i < arr1.length; i++) {
            var d = target - arr1[i];
            track.set(d, arr1[i]);
        }

        for(var i = 0; i < arr2.length; i++) {
            if(track.has(arr2[i]))
                return true;
        }
        return false;
    }
}

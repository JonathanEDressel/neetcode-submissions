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

    dfs(p, arr) {
        if(p === null) {
            return;
        }

        this.dfs(p.left, arr);
        arr.push(p.val);
        this.dfs(p.right, arr);
    }

    isSameTree(p, q) {
        var arr1 = [], arr2 = [];
        this.dfs(p, arr1);
        this.dfs(q, arr2);

        if(arr1.length !== arr2.length)
            return false;

        for(var i = 0; i < arr1.length; i++) {
            if(arr1[i] !== arr2[i])
                return false;
        }
        return true;
    }
}

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

    dfs(root, arr) {
        if(!root)
            return;
        this.dfs(root.left, arr);
        arr.push(root.val);
        this.dfs(root.right, arr);
    }

    twoSumBSTs(root1, root2, target) {
        var arr1 = [], arr2 = [];
        this.dfs(root1, arr1);
        this.dfs(root2, arr2);

        var p1 = 0, p2 = arr2.length - 1;
        while(p1 < arr1.length && p2 >= 0) {
            var sum = arr1[p1] + arr2[p2];
            if(sum === target)
                return true;
            else if (sum < target) {
                p1++;
            }
            else {
                p2--;
            }
        }

        return false;
    }
}

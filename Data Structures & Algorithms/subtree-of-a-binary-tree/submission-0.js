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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */

    findStart(root, val) {
        if(!root)
            return null;
        if(root.val > val)
            return this.findStart(root.right, val);
        else if(root.val < val)
            return this.findStart(root.left, val);
        else 
            return root;
    }

    isSub(main, sub) {
        if(!sub || !main) {
            return main === null;
        }
        var left = this.isSub(main.left, sub.left);
        var right = this.isSub(main.right, sub.right);

        return main.val === sub.val && left && right;    
    }

    isSubtree(root, subRoot) {
        var strt = this.findStart(root, subRoot.val);
        return this.isSub(strt, subRoot);
    }
}

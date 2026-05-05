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

    

    isSame(root, sub) {
        if(!root && !sub)
            return true;
        if(!root || !sub || root.val !== sub.val)
            return false;
        return this.isSame(root.left, sub.left) && this.isSame(root.right, sub.right);
    }

    isSubtree(root, subRoot) {
        if(!subRoot)
            return true;
        if(!root)
            return false;
        
        if(this.isSame(root, subRoot))
            return true;
        return this.isSame(root.left, subRoot) || this.isSame(root.right, subRoot);
    }
}

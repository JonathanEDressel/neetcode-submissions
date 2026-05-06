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
     * @return {TreeNode}
     */

    createTree(root1, root2) {
        if(!root1 && !root2)
            return null;

        var left;
        if(root1 && root2)
            left = this.createTree(root1.left, root2.left);
        else if (!root1 && root2)
            left = this.createTree(null, root2.left);
        else
            left = this.createTree(root1.left, null);

        var right;
        if(root1 && root2)
            right = this.createTree(root1.right, root2.right);
        else if (!root1 && root2)
            right = this.createTree(null, root2.right);
        else
            right = this.createTree(root1.left, null);


        var val = (root1?.val ?? 0) + (root2?.val ?? 0);
        var node = new TreeNode(val);
        if (left)
            node.left = left;
        if (right)
            node.right = right;
        return node;
    }

    mergeTrees(root1, root2) {
        return this.createTree(root1, root2);;
    }
}

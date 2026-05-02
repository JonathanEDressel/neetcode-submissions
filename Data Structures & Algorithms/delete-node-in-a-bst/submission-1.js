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
     * @param {number} key
     * @return {TreeNode}
     */

    getMin(root) {
        var node = root;
        while(node && node.left) {
            node = node.left;
        }
        return node;
    }

    deleteNode(root, key) {
        if(!root)
            return null;
        if (root.val < key) {
            root.right = this.deleteNode(root.right, key);
        }
        else if (root.val > key) {
            root.left = this.deleteNode(root.left, key);
        }
        else {
            if(!root.left) {
                return root.right;
            }
            else if(!root.right) {
                return root.left;
            }
            else {
                var tmp = this.getMin(root.right);
                root.val = tmp.val;
                root.right = this.deleteNode(root.right, tmp.val);
            }
        }
        return root;
    }
}

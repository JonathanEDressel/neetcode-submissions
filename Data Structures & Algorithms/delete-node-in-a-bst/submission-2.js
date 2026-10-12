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
    minValueNode(root) {
        var curr = root;
        while(curr != null && curr.left != null) {
            curr = curr.left;
        }
        return curr;
    }

    deleteNode(root, key) {
        if(!root)
            return null;
        
        if(root.val === key) {
            if(root.left === null) {
                return root.right;
            }
            else if(root.right === null) {
                return root.left;
            }
            else {
                var min = this.minValueNode(root.right);
                root.val = min.val;
                root.right = this.deleteNode(root.right, min.val);
            }
        }
        else if (root.val < key) {
            root.right = this.deleteNode(root.right, key);
        }
        else {
            root.left = this.deleteNode(root.left, key);
        }
    return root;
    }
}

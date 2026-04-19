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
    findMindNode(root) {
        var curr = root;
        while(curr && curr.left)
            curr = curr.left;
        return curr;
    }
    deleteNode(root, key) {
        if(!root)
        return root;

    if(key > root.val) {
        root.right = this.deleteNode(root.right, key);
    }
    else if (key < root.val) {
        root.left = this.deleteNode(root.left, key);
    }
    else {
        if(!root.left) {
            return root.right;
        }
        else if (!root.right) {
            return root.left;
        }
        else {
            var newnode = this.findMindNode(root.right);
            root.val = newnode.val;
            root.right = this.deleteNode(root.right, newnode.val);
        }
    }
    return root;
    }
}

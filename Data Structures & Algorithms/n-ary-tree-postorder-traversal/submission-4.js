/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, children = []) {
 *         this.val = val;
 *         this.children = children;
 *     }
 * }
 */
class Solution {
    /**
     * @param {Node|null} root
     * @return {number[]}
     */

    inorder(root, arr) {
        if(!root)
            return;
        console.log(root.val)
        this.inorder(root.left, arr);
        this.inorder(root.right, arr);
        arr.push(root.val);
    }

    postorder(root) {
        var arr = [];
        this.inorder(root, arr);
        return arr;
    }
}

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

    posto(root, arr) {
        if(!root)
            return;
        this.posto(root.left, arr);
        this.posto(root.right, arr);
        arr.push(root.val);
    }

    postorder(root) {
        var arr = [];
        this.posto(root, arr);
        return arr;
    }
}

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
        for(var i = 0; i < root.children.length; i++) {
            this.posto(root.children[i], arr);
        }
        arr.push(root.val);
    }

    postorder(root) {
        var arr = [];
        this.posto(root, arr);
        return arr;
    }
}

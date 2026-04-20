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
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root)
            return true;

        var qu = [];
        qu.push(root);
        var diff = 0;
        while(qu.length > 0) {
            var len = qu.length;
            for(var i = 0; i < len; i++) {
                var t = qu.pop();
                if(t.left)
                    qu.push(t.left);
                if(t.right)
                    qu.push(t.right);
                if((!t.left && t.right) || (t.left && !t.right))
                    diff++;
            }
        }
        return diff < 2;
    }
}

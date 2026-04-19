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
     * @return {number}
     */

    maxDepth(root) {
        var res = 0;
        if(!root)
            return res;
        var qu = [];
        qu.push(root);
        while (qu.length > 0) { 
            var len = qu.length;
            for(var i = 0; i < len; i++) {
                var t = qu.shift();
                if(t.right)
                    qu.push(t.right);
                if(t.left)
                    qu.push(t.left);
            }
            res++;
        }
        return res;
    }
}

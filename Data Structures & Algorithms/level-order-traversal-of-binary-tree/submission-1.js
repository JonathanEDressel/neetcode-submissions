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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root)
            return [];

        var qu = [];
        var res = [];
        qu.push(root);
        while(qu.length > 0) {
            var len = qu.length;
            var t = [];
            for(var i = 0; i < len; i++) {
                var n = qu.shift();
                t.push(n.val);
                if(n.left)
                    qu.push(n.left)
                if(n.right)
                    qu.push(n.right)
            }
            res.push(t);
        }


        return res;
    }
}

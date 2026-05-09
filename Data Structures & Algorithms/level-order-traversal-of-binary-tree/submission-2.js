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
        if(!root)
            return [];

        var qu = [];
        qu.push(root);
        var res = [];
        while(qu.length > 0) {
            var len = qu.length;
            var tmp = [];
            for(var i = 0; i < len; i++) {
                var curr = qu.shift();
                tmp.push(curr.val);
                if(curr.left)
                    qu.push(curr.left);
                if(curr.right)
                    qu.push(curr.right);
            }
            res.push(tmp);
        }
        return res;
    }
}

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
     * @return {number[]}
     */

    

    rightSideView(root) {
        if(!root)
            return [];
        var qu = [];
        var res = [];
        qu.push(root);
        while(qu.length > 0) {
            var len = qu.length;
            for(var i = len - 1; i >= 0; i--) {
                var t = qu.shift();
                if (i === (len - 1))
                    res.push(t.val);

                if(t.right) {
                    qu.push(t.right);
                }
                if(t.left) {
                    qu.push(t.left);
                }
            }
        }
        return res;
    }
}

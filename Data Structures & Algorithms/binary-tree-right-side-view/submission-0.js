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
        var qu = [];
        var res = [];
        if(!root)
            return [];

        qu.push(root);
        while(qu.length > 0) {
            var len = qu.length;
            for(var i = len - 1; i >= 0; i--) {
                var curr = qu.shift();
                if(i === (len - 1))
                    res.push(curr.val)

                if(curr.right) {
                    qu.push(curr.right);
                }
                if (curr.left) {
                    qu.push(curr.left);
                }
            }
        }

        return res;
    }
}

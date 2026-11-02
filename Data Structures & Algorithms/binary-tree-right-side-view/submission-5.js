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
        var res = [];
        var qu = [];

        qu.push(root);
        while(qu.length > 0) {
            var len = qu.length;
            for(var i = len - 1; i >= 0; i--) {
                var item = qu.shift();
                if (i === (len - 1))
                    res.push(item.val);
                if(item.right)
                    qu.push(item.right);
                if(item.left)
                    qu.push(item.left);
            }
        }
        return res;
    }
}

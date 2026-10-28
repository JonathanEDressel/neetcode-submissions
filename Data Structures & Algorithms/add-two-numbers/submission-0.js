/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        var res = [];
        while(l1) {
            res.push(l1.val);
            l1 = l1.next;
        }

        var i = 0;
        while(l2) {
            if(i < res.length) {
                res[i] += l2.val;
                i++;
            }
            else
                res.push(l2.val)
            l2 = l2.next;
        }
        
        var tmp = new ListNode();
        var t = tmp;

        for(var i = 0; i < res.length; i++) {
            while(res[i] > 0) {

                tmp.next = new ListNode(res[i]%10);
                tmp = tmp.next;
                res[i] = Math.trunc(res[i]/10)
            }
        }

        return t.next;
    }
}

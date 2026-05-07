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
     * @param {ListNode} head
     * @return {void}
     */

    

    reorderList(head) {
        var arr = [];
        var t = head;
        while(t) {
            arr.push(t.val);
            t = t.next;
        }

        var arr2 = [].concat(arr).reverse();
        var flip = true;
        var node = head;
        while(node) {
            var d;
            if (flip) 
                d = arr2.pop();
            else
                d = arr.pop();
            node.val = d;
            node = node.next;
            flip = !flip;
        }

        return node;
    }
}

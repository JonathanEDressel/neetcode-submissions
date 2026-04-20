class ListNode {
    constructor(val, nxtNode = null) {
        this.val = val;
        this.next = nxtNode; 
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        var i = 0;
        var curr = this.head.next;
        while(curr) {
            if(i === index)
                return curr.val;
            i++;
            curr = curr.next;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        var tmp = new ListNode(val);
        tmp.next = this.head.next;
        this.head.next = tmp;
        if(!tmp.next)
            this.tail = tmp;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        var i = 0;
        var curr = this.head.next;
        var prev = this.head;
        while(curr) {
            if(i === index) {
                prev.next = prev.next.next;
                return true;
            }
            prev = prev.next;
            curr = curr.next;
            i++;
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        var res = [];
        var curr = this.head.next;
        while(curr) {
            res.push(curr.val);
            curr = curr.next;
        }
        return res;
    }
}

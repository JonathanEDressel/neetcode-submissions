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
        let i = 0;
        let curr = this.head;
        while (i < index && curr) {
            i++;
            curr = curr.next;
        }

        // Remove the node ahead of curr
        if (curr && curr.next) {
            if (curr.next === this.tail) {
                this.tail = curr;
            }
            curr.next = curr.next.next;
            return true;
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

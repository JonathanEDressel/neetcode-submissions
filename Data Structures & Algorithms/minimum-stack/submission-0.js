class MinStack {
    constructor() {
        this.length = 0;
        this.capacity = 2;
        this.arr = new Array(0);        
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.capacity === this.length)
        this.capacity *= 2;
        this.arr.push(val);
        this.length++;
    }

    /**
     * @return {void}
     */
    pop() {
        this.arr.pop();
        if(this.length > 0)
            this.length--;
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr[this.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        var min = this.arr[0];
        for(var i = 0; i < this.length; i++) {
            if(min > this.arr[i])
                min = this.arr[i];
        }
        return min;
    }
}

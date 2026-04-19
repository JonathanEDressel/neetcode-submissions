class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.length = 0;
        this.arr = new Array(capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        for (var x = 0; x < this.arr.length; x++) {
            if (x === i)
                return this.arr[i];
        }
        return -1;
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        for (var x = 0; x < this.arr.length; x++) {
            if (x === i) {
                this.arr[x] = n;
                break;
            }
        }
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.length === this.capacity) {
            this.resize();
        }
        this.arr[this.length] = n;
        this.length++;
    }

    /**
     * @returns {number}
     */
    popback() {
        if(this.length > 0)
            this.length--;
        return this.arr[this.length];
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity = this.capacity * 2;
        const newArr = new Array(this.capacity);
        for(var i = 0; i < this.length; i++) {
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.length;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}

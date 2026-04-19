class TreeNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class TreeMap {
    constructor() {
        this.root = null;
    }

    /**
     * @param {number} key
     * @param {number} val
     * @returns {void}
     */
    insert(key, val) {
        var tmp = new TreeNode(key, val);
        if(!this.root) {
            this.root = tmp;
            return;
        }
        var curr = this.root;
        while(true) {
            if(key < curr.key) {
                if(curr.left === null) {
                    curr.left = tmp;
                    return;
                }
                curr = curr.left;
            }
            else if(key > curr.key) {
                if(curr.right === null) {
                    curr.right = tmp;
                    return;
                }
                curr = curr.right;
            }
            else {
                curr.val = val;
                return;
            }
        }
    }

    /**
    //  * @param {number} key
     * @returns {number}
     */
    get(key) {
        var curr = this.root;
        while(curr) {
            if(key < curr.key) {
                curr = curr.left;
            }
            else if (key > curr.key) {  
                curr = curr.right;
            }
            else {
                return curr.val;
            }
        }
        return -1;
    }

    getNode(key) {
        var curr = this.root;
        while(curr) {
            if(key < curr.key) {
                curr = curr.left;
            }
            else if (key > curr.key) {  
                curr = curr.right;
            }
            else {
                return curr;
            }
        }
        return null;
    }

    /**
     * @returns {number}
     */
    getMin() {
        var curr = this.root;
        if(!curr)
            return -1;
        while(curr && curr.left) {
            curr = curr.left;
        }
        return curr.val;
    }

    getMinNode(node) {
        var curr = node;
        if(!curr)
            return null;
        while(curr && curr.left) {
            curr = curr.left;
        }
        return curr;
    }

    /**
     * @returns {number}
     */
    getMax() {
        var curr = this.root;
        if(!curr) 
            return -1;
        while(curr && curr.right) {
            curr = curr.right;
        }
        return curr.val;
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key) {
        this.root = this.removeHelper(this.root, key);
    }

    removeHelper(node, key) {
        if(!node)
            return null;
        if(key > node.key) 
            node.right = this.removeHelper(node.right, key);
        else if (key < node.key) 
            node.left = this.removeHelper(node.left, key);
        else {
            if(!node.left)
                return node.right;
            else if(!node.right)
                return node.left;
            else {
                var min = this.getMinNode(node.right);
                node.val = min.val;
                node.key = min.key;
                node.right = this.removeHelper(node.right, min.key);
            }
        }
        return node;
    }

    /**
     * @returns {number[]}
     */

    inOrderHelper(node, arr) {
        if (!node) 
            return;
        this.inOrderHelper(node.left, arr);
        arr.push(node.key);
        this.inOrderHelper(node.right, arr);
    }
    getInorderKeys() {
        var res = [];
        this.inOrderHelper(this.root, res);
        return res;
    }
}
class MinStack {
    constructor() {
        this.stack = [];
        this.min = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.stack.length === 0 || this.min[this.min.length - 1] >= val){
            this.min.push(val);
        }

        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        let elem1 = this.stack.pop();
        let elem2 = this.min[this.min.length - 1];

        if(elem1 === elem2){
            this.min.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length - 1];
    }
}

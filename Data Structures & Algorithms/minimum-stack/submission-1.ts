class MinStack {
    stack: { val: number, min: number }[];
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        const currentMin = this.stack.length === 0 ? val : Math.min(val, this.getMin());
        this.stack.push({ val, min: currentMin });
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1].val;
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.stack[this.stack.length - 1].min;
    }
}
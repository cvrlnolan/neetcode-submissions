class NumArray {
    /**
     * @param {number[]} nums
     */
    total: number = 0;
    prefixSum: number[] = [];
    constructor(nums: number[]) {
        for (const num of nums) {
            this.total += num;
            this.prefixSum.push(this.total);
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left: number, right: number): number {
        const preRight = this.prefixSum[right];
        const preLeft = left > 0 ? this.prefixSum[left - 1] : 0;

        return preRight - preLeft;
    }
}

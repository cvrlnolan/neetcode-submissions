class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        const output = new Array(n).fill(0);
        let prefix = 1;
        let suffix = 1;
        for (let i = 0; i < n; i++) {
            output[i] = prefix;
            prefix *= nums[i];
        }

        for (let i = n - 1; i >= 0; i--) {
            output[i] *= suffix;
            suffix *= nums[i];
        }

        return output;
    }
}

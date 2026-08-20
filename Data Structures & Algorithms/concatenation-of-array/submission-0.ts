class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let ans = [];
        const n = nums.length;
        const newSize = n * 2;

        for (let i = 0; i < newSize; i++) {
            ans[i] = i < n ? nums[i] : nums[i - n];
        }

        return ans;
    }
}

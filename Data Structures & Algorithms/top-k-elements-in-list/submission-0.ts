class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const kMap = new Map();
        const freq = [];

        for (let i = 0; i < nums.length; i++) {
            if (!kMap.has(nums[i])) {
                kMap.set(nums[i], 1);
            } else {
                kMap.set(nums[i], kMap.get(nums[i]) + 1);
            }
        }

        return [...kMap.entries()]
            .sort((a, b) => b[1] - a[1])
            .map((a) => a[0])
            .slice(0, k);
    }
}

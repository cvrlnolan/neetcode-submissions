class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        let subCount = 0;

        for (let i = 0; i < nums.length; i++) {
            let prefixSum = 0;
            prefixSum += nums[i];
            if (nums[i] === k) {
                subCount++;
            }
            for (let j = i + 1; j < nums.length; j++) {
                prefixSum += nums[j];
                if (prefixSum === k) {
                    subCount++;
                }
            }
        }

        return subCount;
    }
}

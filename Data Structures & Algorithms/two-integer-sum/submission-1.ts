class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const diffMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            let difference = target - nums[i];
            if (!diffMap.has(difference)) {
                diffMap.set(nums[i], i);
            } else {
                return [i, diffMap.get(difference)];
            }
        }

        return [];
    }
}

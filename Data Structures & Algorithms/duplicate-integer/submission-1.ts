class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let hasDupe = false;

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] === nums[i]) {
                    hasDupe = true
                }
            }
        }

        return hasDupe;
    }
}

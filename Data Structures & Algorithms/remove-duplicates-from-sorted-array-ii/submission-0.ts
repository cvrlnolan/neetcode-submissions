class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let l = 2;

        for (let r = 2; r < nums.length; r++) {
            if (nums[r] !== nums[l - 2]) {
                nums[l] = nums[r];
                l++;
            }
        }

        return l;
    }
}

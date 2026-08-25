class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) return 0;
        const numSet = new Set(nums);
        let max = 0;

        for (const num of numSet) {
            if (!numSet.has(num - 1)) {
                let currentNum = num;
                let currentStreak = 1;

                while (numSet.has(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak += 1;
                }

                max = Math.max(max, currentStreak);
            }
        }

        return max;
    }
}
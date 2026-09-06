class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0,
            r = heights.length - 1,
            maxArea = 0;

        while (l < r) {
            const area = (r - l) * Math.min(heights[r], heights[l]);
            maxArea = Math.max(maxArea, area);
            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return maxArea;
    }
}

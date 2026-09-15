class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let l = 0,
            r = height.length - 1,
            maxWater = 0,
            leftMax = height[l],
            rightMax = height[r];

        while (l<r) {
            if (leftMax < rightMax) {
                l++
                leftMax = Math.max(leftMax, height[l])
                maxWater += leftMax - height[l]
            } else {
                r--
                rightMax = Math.max(rightMax, height[r])
                maxWater += rightMax - height[r]
            }
        }

        return maxWater
    }
}

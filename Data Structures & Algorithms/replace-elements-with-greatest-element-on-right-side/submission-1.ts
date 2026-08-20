class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        // Reverse the array
        // Initial max is -1 since we are scannning in reverse order
        // Calculate the new max: Math.max(oldmax, arr[i]), before overriding the arr[i] with the current max
        // Replace the current arr[i] with the current right max
        // Replace the current max with the new max
        let rightMax = -1;
        for (let i = arr.length - 1; i >= 0; i--) {
            const newMax = Math.max(rightMax, arr[i]);
            arr[i] = rightMax;
            rightMax = newMax;
        }
        return arr;
    }
}

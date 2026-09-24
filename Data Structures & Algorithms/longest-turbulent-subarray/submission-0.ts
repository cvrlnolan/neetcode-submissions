class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr: number[]): number {
        let L = 0,
            longest = 1;

        for (let R = 1; R < arr.length; R++) {
            let cmp = Math.sign(arr[R - 1] - arr[R]);
            if (cmp === 0) {
                L = R;
            } else if (R === arr.length - 1 || cmp * Math.sign(arr[R] - arr[R + 1]) >= 0) {
                longest = Math.max(longest, R - L + 1);
                L = R;
            }
        }

        return longest;
    }
}

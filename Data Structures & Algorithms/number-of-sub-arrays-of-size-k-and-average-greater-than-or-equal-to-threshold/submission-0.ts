class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr: number[], k: number, threshold: number): number {
        let L = 0;
        let res = 0;
        let total = 0;

        for (let R = 0; R < arr.length; R++) {
            total += arr[R];
            if (R - L + 1 === k) {
                if (total >= threshold * k) {
                    res++;
                }
                total -= arr[L];
                L++;
            }
        }

        return res;
    }
}

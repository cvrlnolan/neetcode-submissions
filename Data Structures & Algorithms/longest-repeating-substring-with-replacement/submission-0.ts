class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let L = 0,
            longest = 0,
            maxFreq = 0,
            window = new Map();

        for (let R = 0; R < s.length; R++) {
            window.set(s[R], (window.get(s[R]) || 0) + 1);
            maxFreq = Math.max(maxFreq, window.get(s[R]) || 0);

            if (R - L + 1 - maxFreq > k) {
                window.set(s[L], window.get(s[L]) - 1);
                L++;
            }

            longest = Math.max(longest, R - L + 1);
        }

        return longest;
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let L = 0,
            longest = 0,
            window = new Set();

        for (let R = 0; R < s.length; R++) {
            while (window.has(s[R])) {
                window.delete(s[L]);
                L++;
            }
            window.add(s[R]);

            longest = Math.max(longest, R - L + 1);
        }

        return longest;
    }
}
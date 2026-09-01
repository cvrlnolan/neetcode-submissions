class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

        let l = 0,
            r = s.length - 1;

        while (l < r) {
            if (s.charAt(l) !== s.charAt(r)) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }
}

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;

        const s1Counts = new Array(26).fill(0);
        const s2Counts = new Array(26).fill(0);
        const aCode = "a".charCodeAt(0);

        for (let i = 0; i < s1.length; i++) {
            s1Counts[s1.charCodeAt(i) - aCode]++;
            s2Counts[s2.charCodeAt(i) - aCode]++;
        }

        const matches = (c1: number[], c2: number[]) => {
            for (let i = 0; i < 26; i++) {
                if (c1[i] !== c2[i]) return false;
            }
            return true;
        };

        if (matches(s1Counts, s2Counts)) return true;

        for (let R = s1.length; R < s2.length; R++) {
            s2Counts[s2.charCodeAt(R) - aCode]++;
            s2Counts[s2.charCodeAt(R - s1.length) - aCode]--;
            if (matches(s1Counts, s2Counts)) return true;
        }

        return false;
    }
}
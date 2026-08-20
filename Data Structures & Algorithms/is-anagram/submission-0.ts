class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let sHashTable = new Map(),
            tHashTable = new Map();
        if (s.length !== t.length) {
            return false;
        }

        for (let i = 0; i < s.length; i++) {
            if (sHashTable.has(s[i])) {
                const count = sHashTable.get(s[i]);
                sHashTable.set(s[i], count + 1);
            } else {
                sHashTable.set(s[i], 1);
            }

            if (tHashTable.has(t[i])) {
                const count = tHashTable.get(t[i]);
                tHashTable.set(t[i], count + 1);
            } else {
                tHashTable.set(t[i], 1);
            }
        }

        if (sHashTable.size !== tHashTable.size) {
            return false;
        }

        for (const [key, value] of sHashTable) {
            if (!tHashTable.has(key) || tHashTable.get(key) !== value) {
                return false;
            }
        }

        return true;
    }
}

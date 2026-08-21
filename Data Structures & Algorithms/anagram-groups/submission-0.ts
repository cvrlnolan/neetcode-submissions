class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let groups = new Map();
        for (let i = 0; i < strs.length; i++) {
            const key = strs[i].split("").sort().join("");
            if (!groups.has(key)) {
                groups.set(key, []);
            }
            groups.get(key).push(strs[i]);
        }
        return Array.from(groups.values());
    }
}
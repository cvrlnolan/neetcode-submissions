class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const res = new Map();

        for (let i = 0; i < strs.length; i++) {
            const count = new Array(26).fill(0)
            for (let c of strs[i]) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
            const key = count.join(",")
            if(!res.has(key)) {
                res.set(key, [])
            }

            res.get(key).push(strs[i])
        }

        return Array.from(res.values());
    }
}

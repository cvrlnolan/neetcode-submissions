class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let parenthesis = [];

        for (let i = 0; i < s.length; i++) {
            if (["(", "{", "["].includes(s[i])) {
                parenthesis.push(s[i]);
                continue;
            }

            if (s[i] === ")") {
                if (parenthesis.pop() !== "(") {
                    return false;
                }
            }

            if (s[i] === "}") {
                if (parenthesis.pop() !== "{") {
                    return false;
                }
            }

            if (s[i] === "]") {
                if (parenthesis.pop() !== "[") {
                    return false;
                }
            }
        }

        return parenthesis.length === 0;
    }
}

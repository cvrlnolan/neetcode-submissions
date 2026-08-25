class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let scores = [];

        for (let i = 0; i < operations.length; i++) {
            let n = scores.length;
            if (Number.isNaN(parseInt(operations[i]))) {
                if (operations[i] === "+") {
                    scores.push(scores[n - 1] + scores[n - 2]);
                }

                if (operations[i] === "D") {
                    scores.push(2 * scores[n - 1]);
                }

                if (operations[i] === "C") {
                    scores.pop();
                }

                continue;
            }
            scores.push(parseInt(operations[i]));
        }

        return scores.reduce((acc, s) => acc + s, 0);
    }
}

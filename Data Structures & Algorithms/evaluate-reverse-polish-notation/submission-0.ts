class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let operations = [];
        let first = undefined,
            last = undefined,
            op = undefined;

        for (let tok of tokens) {
            if (isNaN(parseInt(tok)) && tok.length === 1) {
                switch (tok) {
                    case "+":
                        first = operations.pop();
                        last = operations.pop();
                        op = last + first;
                        operations.push(op);
                        continue;
                    case "-":
                        first = operations.pop();
                        last = operations.pop();
                        op = last - first;
                        operations.push(op);
                        continue;
                    case "*":
                        first = operations.pop();
                        last = operations.pop();
                        op = last * first;
                        operations.push(op);
                        continue;
                    case "/":
                        first = operations.pop();
                        last = operations.pop();
                        op = Math.trunc(last / first);
                        operations.push(op);
                        continue;

                    default:
                        continue;
                }
            }

            operations.push(parseInt(tok));
        }

        return operations.pop();
    }
}

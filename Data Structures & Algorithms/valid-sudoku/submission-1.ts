class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        for (let i = 0; i < board.length; i++) {
            const row = board[i];
            const rowValues = new Set();
            for (let j = 0; j < row.length; j++) {
                if (row[j] !== '.' && rowValues.has(row[j])) {
                    return false;
                }

                rowValues.add(row[j]);
            }
        }

        for (let k = 0; k < board[0].length; k++) {
            const colValues = new Set();
            for (let l = 0; l < board.length; l++) {
                if (board[l][k] !== '.' && colValues.has(board[l][k])) {
                    return false;
                }

                colValues.add(board[l][k]);
            }
        }

        for (let r = 0; r < 9; r += 3) {
            for (let c = 0; c < 9; c += 3) {
                const boxValues = new Set();
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        const val = board[r + i][c + j];
                        if (val !== '.' && boxValues.has(val)) return false;
                        boxValues.add(val);
                    }
                }
            }
        }

        return true;
    }
}
class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    prefixSums: number[][] = [];
    constructor(matrix: number[][]) {
        const rows = matrix.length;
        const cols = matrix[0].length;
        this.prefixSums = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));

        for (let i = 1; i <= rows; i++) {
            for (let j = 1; j <= cols; j++) {
                this.prefixSums[i][j] =
                    matrix[i - 1][j - 1] +
                    this.prefixSums[i - 1][j] +
                    this.prefixSums[i][j - 1] -
                    this.prefixSums[i - 1][j - 1];
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        return (
            this.prefixSums[row2 + 1][col2 + 1] -
            this.prefixSums[row1][col2 + 1] -
            this.prefixSums[row2 + 1][col1] +
            this.prefixSums[row1][col1]
        );
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let L = 0,
            maxProfit = 0;

        for (let R = 1; R < prices.length; R++) {
            if (prices[R] > prices[L]) {
                maxProfit = Math.max(prices[R] - prices[L], maxProfit);
            } else {
                L = R
            }
        }

        return maxProfit;
    }
}

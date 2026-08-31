class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        let carPositionSpeed = position.map((p, i) => [p, speed[i]]).sort((a, b) => b[0] - a[0]);
        let carFleetStack = [];

        for (let i = 0; i < carPositionSpeed.length; i++) {
            const [position, speed] = carPositionSpeed[i];
            const time = (target - position) / speed;

            if (carFleetStack.length > 0 && time <= carFleetStack[carFleetStack.length - 1].time) {
                carFleetStack[carFleetStack.length - 1].fleet++;
                continue;
            }

            carFleetStack.push({ time, fleet: 1 });
        }

        return carFleetStack.length;
    }
}

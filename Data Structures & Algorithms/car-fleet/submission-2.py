class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        carPositionSpeed = sorted([[p, speed[i]] for i, p in enumerate(position)], reverse=True)
        carFleet = []

        for i, ps in enumerate(carPositionSpeed):
            [p, s] = ps
            time = (target - p) / s

            if carFleet and time <= carFleet[-1]["time"]:
                carFleet[-1]["fleet"] += 1
                continue

            carFleet.append({"time": time, "fleet": 1})

        return len(carFleet)
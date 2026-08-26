class LRUCache {
    /**
     * @param {number} capacity
     */
    capacity: number;
    cacheMap: Map<any, any>;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.cacheMap = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (this.cacheMap.has(key)) {
            const value = this.cacheMap.get(key);
            this.cacheMap.delete(key);
            this.cacheMap.set(key, value);
            return this.cacheMap.get(key);
        }

        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (this.cacheMap.has(key)) {
            this.cacheMap.delete(key);
            this.cacheMap.set(key, value);
            return;
        }

        this.cacheMap.set(key, value);

        if (this.cacheMap.size > this.capacity) {
            const firstKey = this.cacheMap.keys().next().value;
            this.cacheMap.delete(firstKey);
        }

        return;
    }
}

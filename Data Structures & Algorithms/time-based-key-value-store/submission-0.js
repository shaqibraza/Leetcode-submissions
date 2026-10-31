class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)){
            this.keyStore.set(key, []);
        }

        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)) return "";

        const arr = this.keyStore.get(key);

        let start = 0;
        let end = arr.length - 1;
        let ans = "";

        while(start <= end){
            const mid = Math.floor((start + end) / 2);

            if(arr[mid][0] <= timestamp){
                ans = arr[mid][1];
                start = mid + 1;
            }else{
                end = mid - 1;
            }
        }

        return ans;
    }
}

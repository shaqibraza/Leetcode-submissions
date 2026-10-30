class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let start = Math.max(...weights);
        let end = weights.reduce((sum, weight) => sum + weight, 0);

        while(start <= end){
            const mid = Math.floor((start + end) / 2);

            let capacity = 1;
            let currWeight = 0;
            for(let weight of weights){
                if(currWeight + weight > mid){
                    capacity++;
                    currWeight = 0;
                }
                currWeight += weight;
            }

            if(capacity <= days){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
        }

        return start;
    }
}

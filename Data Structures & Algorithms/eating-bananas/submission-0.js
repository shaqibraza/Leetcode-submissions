class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let start = 1;
        let end = Math.max(...piles);

        while(start <= end){
            const mid = Math.floor((start + end) / 2);

            let hours = 0;
            for(let pile of piles){
                hours += Math.ceil(pile / mid);
            }

            if(hours <= h){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
        }

        return start;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        let low = Math.max(...nums);
        let high = nums.reduce((sum, num) => sum + num, 0);

        while(low <= high){
            const mid = Math.floor((low + high) / 2);
            
            let sum = 0;
            let parts = 1;

            for(let num of nums){
                if(sum + num > mid){
                    parts++;
                    sum = num;
                }else{
                    sum += num;
                }
            }

            if(parts <= k){
                high = mid - 1;
            }else{
                low = mid + 1;
            }
        }

        return low;
    }
}

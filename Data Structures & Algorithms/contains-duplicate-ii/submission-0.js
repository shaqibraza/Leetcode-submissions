class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const window = new Set();
        for(let right = 0; right < nums.length; right++){
            if(window.has(nums[right])){
                return true;
            }
            window.add(nums[right]);

            if(window.size > k){
                window.delete(nums[right - k]);
            }
        }

        return false;
    }
}

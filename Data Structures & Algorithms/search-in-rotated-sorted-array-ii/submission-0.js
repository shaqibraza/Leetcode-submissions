class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        let start = 0;
        let end = nums.length - 1;

        while(start <= end){
            const mid = Math.floor((start + end) / 2);

            if(nums[mid] === target) return true;

            if(nums[start] === nums[mid] && nums[mid] === nums[end]){
                start++;
                end--;
            }else if(nums[start] <= nums[mid]){
                if(target >= nums[start] && target < nums[mid]){
                    end = mid - 1;
                }else{
                    start = mid + 1;
                }
            }else{
                if(target > nums[mid] && target <= nums[end]){
                    start = mid + 1;
                }else{
                    end = mid - 1;
                }
            }
        }

        return false;
    }
}

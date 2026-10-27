class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b)
    const ans = [];

    for(let i = 0; i < nums.length - 2; i++){
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let first = nums[i];

        let left = i + 1;
        let right = nums.length - 1;

        while(left < right){
            if(nums[left] + nums[right] + first === 0){
                ans.push([first, nums[left], nums[right]]);
                left++;
                right--;

                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }

                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            }else if(nums[left] + nums[right] + first > 0){
                right--;
            }else{
                left++;
            }    
        }
    }

    return ans;
    }
}

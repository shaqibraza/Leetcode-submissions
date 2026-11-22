class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let ans = 0;
        for(let i = 0; i < nums.length; i++){
            let num = nums[i];
            num = Math.abs(num);

            if(nums[num] > 0){
                nums[num] = -nums[num];
            }else{
                ans = num;
                break;
            }
        }

        for(let i = 0; i < nums.length; i++){
            nums[i] = Math.abs(nums[i]);
        }

        return ans;
    }
}

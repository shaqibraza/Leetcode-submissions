class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
            nums = nums.sort((a, b) => a - b);
    const ans = [];
    const n = nums.length;

    for(let i = 0; i < n; i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue;

        for(let j = i + 1;  j < n;){
            let start = j + 1;
            let end = n - 1;

            while(start < end){
                const sum = nums[i] + nums[j] + nums[start] + nums[end];

                if(sum === target){
                    ans.push([nums[i], nums[j], nums[start], nums[end]]);
                    start++;
                    end--;

                    while(start < end && nums[start] === nums[start - 1]){
                        start++;
                    }
                    while(start < end && nums[end] === nums[end + 1]){
                        end--;
                    }
                }else if(sum > target){
                    end--;
                }else{
                    start++;
                }
            }

            j++;
            while(j < n && nums[j] === nums[j - 1]){
                j++;
            }
        }
    }

    return ans;
    }
}

class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const ans = new Array(2).fill(0);
        let start = 0;
        let end = numbers.length - 1;

        while(start < end){
            const sum = numbers[start] + numbers[end];

            if(sum === target){
                ans[0] = start + 1;
                ans[1] = end + 1;

                return ans;
            } else if(sum > target){
                end--;
            }else {
                start++;
            }
        }
        ans[0] = -1;
        ans[1] = -1;

        return ans;
    }
}

class Solution {
    public int majorityElement(int[] nums) {
        int result = 0;
        int count = 0;

        for(int num : nums){
            if(count == 0){
                result = num;
            }
            count = count + (num == result ? 1 : -1);
        }
        return result;
    }
}
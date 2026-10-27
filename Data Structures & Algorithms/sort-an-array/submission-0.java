class Solution {
    public int[] sortArray(int[] nums) {
        return divide(nums, 0, nums.length - 1);
    }
    public int[] divide(int[] nums, int start, int end){
        if(start >= end) return nums;

        int mid = start + (end - start) / 2;
        divide(nums, start, mid);
        divide(nums, mid + 1, end);
        return conqure(nums, start, mid, end);
    }
    public int[] conqure(int[] nums, int start, int mid, int end){
        int[] merged = new int[end - start + 1];

        int idx1 = start;
        int idx2 = mid + 1;
        int x = 0;

        while(idx1 <= mid && idx2 <= end){
            if(nums[idx1] <= nums[idx2]){
                merged[x++] = nums[idx1++];
            }else{
                merged[x++] = nums[idx2++];
            }
        }
        while(idx1 <= mid){
            merged[x++] = nums[idx1++];
        }
        while(idx2 <= end){
            merged[x++] = nums[idx2++];
        }
        for(int i = 0, j = 0; i < merged.length; i++, j++){
            nums[start + j] = merged[i];
        }
        return nums;
    }
}
class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let ptr1 = m - 1;
        let ptr2 = n - 1;
        let ptr3 = m + n - 1;

        while(ptr1 >= 0 && ptr2 >= 0){
            if(nums1[ptr1] > nums2[ptr2]){
                nums1[ptr3] = nums1[ptr1];
                ptr1--;
            }else{
                nums1[ptr3] = nums2[ptr2];
                ptr2--;
            }
            ptr3--;
        }
        while(ptr2 >= 0){
            nums1[ptr3] = nums2[ptr2];
            ptr2--;
            ptr3--;
        }
    }
}

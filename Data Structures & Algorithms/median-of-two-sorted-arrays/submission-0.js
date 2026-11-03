class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const result = [];

        let i = 0, j = 0;

        while(i < nums1.length && j < nums2.length){
            if(nums1[i] <= nums2[j]){
                result.push(nums1[i]);
                i++;
            }else{
                result.push(nums2[j]);
                j++;
            }
        }
        while(i < nums1.length){
            result.push(nums1[i]);
            i++;
        }
        while(j < nums2.length){
            result.push(nums2[j]);
            j++;
        }

        const mid = Math.floor(result.length / 2);
        if(result.length % 2 === 1){
            return result[mid];
        }else{
            return (result[mid] + result[mid - 1]) / 2;
        }
    }
}

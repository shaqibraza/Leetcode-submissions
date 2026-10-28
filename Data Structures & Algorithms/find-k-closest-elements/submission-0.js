class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let left = 0;
        let right = arr.length - 1;

        while(right - left + 1 > k){
            const leftDistance = Math.abs(arr[left] - x);
            const rightDistance = Math.abs(arr[right] - x);

            if(leftDistance > rightDistance){
                left++;
            }else{
                right--;
            }
        }

        return arr.slice(left, right + 1);
    }
}

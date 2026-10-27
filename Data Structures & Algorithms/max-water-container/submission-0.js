class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let ans = 0;
        let left = 0;
        let right  = heights.length - 1;

        while(left < right){
            if(heights[left] <= heights[right]){
                let currVol = heights[left] * (right - left);
                ans = Math.max(ans, currVol);

                left++;
            }else{
                let currVol = heights[right] * (right - left);

                ans = Math.max(ans, currVol);

                right--;
            }
        }

        return ans;
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s, left, right){
        while(left < right){
            if(s[left] !== s[right]){
                return false;
            }
            left++;
            right--
        }
        return true;
    }

    validPalindrome(s) {
        if(s.length === 1) return true;

        let left = 0;
        let right = s.length - 1;

        while(left < right){
            if(s[left] !== s[right]){
                return this.isPalindrome(s, left + 1, right) || this.isPalindrome(s, left, right - 1);
            }
            left++;
            right--;
        }
        return true;
    };
}

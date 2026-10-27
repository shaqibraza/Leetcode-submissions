class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
        let left = 0;
        let right = s.length - 1;

        while(left < right){
            while(left < right && /[a-z0-9]/i.test(s[left]) === false){
                left++;
            }
            while(left < right && /[a-z0-9]/i.test(s[right]) === false){
                right--;
            }
            if(s[left] !== s[right]){
                return false;
            }
            left++;
            right--;
        }

        return true;
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let left = 0;
        let ans = 0;

        for(let right = 0; right < s.length; right++){
            while(set.has(s[right])){
                set.delete(s[left]);
                left++;
            }
            set.add(s[right]);

            ans = Math.max(ans, right - left + 1);
        }

        return ans;
    }
}

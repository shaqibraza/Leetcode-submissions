class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map();
        let ans = 0;
        let left = 0;
        let maxFreq = 0;
        for(let right = 0; right < s.length; right++){
            map.set(s[right], (map.get(s[right]) || 0) + 1);

            maxFreq = Math.max(maxFreq, map.get(s[right]));

            while(right - left + 1 - maxFreq > k){
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }

            ans = Math.max(ans, right - left + 1);
        }

        return ans;
    }
}

class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let ans = "";
        let ptr1 = 0;
        let ptr2 = 0;

        while(ptr1 < word1.length && ptr2 < word2.length){
            ans += word1[ptr1];
            ans += word2[ptr2];

            ptr1++;
            ptr2++;
        }
        while(ptr1 < word1.length){
            ans += word1[ptr1];
            ptr1++;
        }
        while(ptr2 < word2.length){
            ans += word2[ptr2];
            ptr2++;
        }

        return ans;
    }
}

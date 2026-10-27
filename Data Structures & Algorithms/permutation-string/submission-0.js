class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        const s1Freq = new Array(26).fill(0);
        const s2Freq = new Array(26).fill(0);
        for(let i = 0; i < s1.length; i++){
            s1Freq[s1.charCodeAt(i) - 97]++;
            s2Freq[s2.charCodeAt(i) - 97]++;
        }

        if(s1Freq.every((val, i) => val === s2Freq[i])) return true;

        for(let i = s1.length; i < s2.length; i++){
            s2Freq[s2.charCodeAt(i) - 97]++;
            s2Freq[s2.charCodeAt(i - s1.length) - 97]--;

            if(s1Freq.every((val, i) => val === s2Freq[i])) return true;
        }

        return false;
    }
}

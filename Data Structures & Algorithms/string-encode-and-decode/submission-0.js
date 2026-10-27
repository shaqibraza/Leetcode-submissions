class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for(const str of strs){
            result += str.length + "#" + str;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];

        let i = 0;

        while(i < str.length){
            let j = i;

            while(str[j] !== "#"){
                j++;
            }

            const length = Number(str.slice(i, j));

            i = j + 1;

            result.push(str.slice(i, i + length));

            i = i + length;
        }

        return result;
    }
}

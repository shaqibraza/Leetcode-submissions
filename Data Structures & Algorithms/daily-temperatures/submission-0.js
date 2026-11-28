class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const ans = new Array(n).fill(0);
        const stack = [];

        for(let i = 0; i < n; i++){
            while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]){
                const prevIdx = stack.pop();

                ans[prevIdx] = i - prevIdx;
            }
            stack.push(i);
        }
        return ans;
    }
}

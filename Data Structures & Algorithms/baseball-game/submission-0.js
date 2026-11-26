class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];

        for(let op of operations){
            if(op === "+"){
                stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
            }else if(op === "D"){
                stack.push(stack[stack.length - 1] * 2);
            }else if(op === "C"){
                stack.pop();
            }else{
                stack.push(Number(op));
            }
        }

        return stack.reduce((sum, value) => sum + value, 0);
    }
}

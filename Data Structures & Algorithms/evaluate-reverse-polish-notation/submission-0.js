class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for(let token of tokens){
            if(stack.length > 1 && token === "+"){
                let val1 = stack.pop();
                let val2 = stack.pop();

                stack.push(val1 + val2);
            }else if(stack.length > 1 && token === "-"){
                let val1 = stack.pop();
                let val2 = stack.pop();

                stack.push(val2 - val1);
            }else if(stack.length > 1 && token === "*"){
                let val1 = stack.pop();
                let val2 = stack.pop();

                stack.push(val1 * val2);
            }else if(stack.length > 1 && token === "/"){
                let val1 = stack.pop();
                let val2 = stack.pop();

                stack.push(Math.trunc(val2 / val1));
            }else{
                stack.push(Number(token))
            }
        }

        return stack[0];
    }
}

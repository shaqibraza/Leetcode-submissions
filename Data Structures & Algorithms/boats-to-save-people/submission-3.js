class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        if(people.length === 1) return 1;
        
        people.sort((a, b) => a - b);

        let left = 0;
        let right = people.length - 1;

        let count = 0;

        while(left < right){
            const sum = people[left] + people[right];

            if(sum <= limit){
                count++;
                left++;
                right--
            }else{
                count++;
                right--;
            }

            if(left === right){
                count++;
            }
        }

        return count; 
    }
}

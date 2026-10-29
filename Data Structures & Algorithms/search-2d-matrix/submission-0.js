class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const raws = matrix.length;
        const cols = matrix[0].length;

        let start = 0;
        let end = (raws * cols) - 1;

        while(start <= end){
            const mid = Math.floor((start + end) / 2);
            const raw = Math.floor(mid / cols);
            const col = Math.floor(mid % cols);

            if(matrix[raw][col] === target){
                return true;
            }else if(matrix[raw][col] < target){
                start = mid + 1;
            }else {
                end = mid - 1;
            }
        }
        return false;
    }
}

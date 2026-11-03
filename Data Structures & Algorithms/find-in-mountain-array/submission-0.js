/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *     @param {number} index
 *     @return {number}
 *     get(index) {
 *         ...
 *     }
 *
 *     @return {number}
 *     length() {
 *         ...
 *     }
 * }
 */

class Solution {
    /**
     * @param {number} target
     * @param {MountainArray} mountainArr
     * @return {number}
     */
    findInMountainArray(target, mountainArr) {
        let low = 0;
        let high = mountainArr.length() - 1;

        while(low < high){
            const mid = Math.floor((low + high) / 2);

            if(mountainArr.get(mid) < mountainArr.get(mid + 1)){
                low = mid + 1;
            }else{
                high = mid;
            }
        }

        const peak = low;

        low = 0;
        high = peak;
        while(low <= high){
            const mid = Math.floor((low + high) / 2);

            if(mountainArr.get(mid) === target){
                return mid;
            }
            if(mountainArr.get(mid) < target){
                low = mid + 1;
            }else{
                high = mid - 1;
            }
        }

        low = peak + 1;
        high = mountainArr.length() - 1;
        while(low <= high){
            const mid = Math.floor((low + high) / 2);

            if(mountainArr.get(mid) === target){
                return mid;
            }
            if(mountainArr.get(mid) > target){
                low = mid + 1;
            }else{
                high = mid - 1;
            }
        }

        return -1;
    }
}

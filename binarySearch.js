/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Example:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// search for target number in array(nums)
// if target e xists return its index
// if target does not exist return - 1
// write algorithm in O(log n) time complexity

function search(nums, target) {
    let left = 0;
    let right = nums.length -1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        let currVal = nums[mid]
            if(currVal === target) {
                return mid;
            } else if (currVal > target) {
                right = mid - 1;
            } else if (currVal < target) {
                left = mid + 1;
            }
    }
    return - 1
};
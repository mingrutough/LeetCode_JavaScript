/*
 * @Author: mingru 
 * @Date: 2017-10-05 16:05:03 
 * @Last Modified by: mingru
 * @Last Modified time: 2017-10-05 16:05:27
 */
// Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

// Example 1:
// Input: [3, 2, 1]

// Output: 1

// Explanation: The third maximum is 1.
// Example 2:
// Input: [1, 2]

// Output: 2

// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
// Example 3:
// Input: [2, 2, 3, 1]

// Output: 1

// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.


/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var max1,
        max2,
        max3;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === max1 || nums[i] === max2 || nums[i] === max3) { // 排除重复数字的干扰
            continue;
        };
        if (max1 === undefined || nums[i] > max1) {
            max3 = max2;
            max2 = max1;
            max1 = nums[i];
        } else if (max2 === undefined || nums[i] > max2) {
            max3 = max2;
            max2 = nums[i];
        } else if (max3 === undefined || nums[i] > max3) {
            max3 = nums[i];
        } 
    };
    return max3 === undefined ? max1 : max3;
};


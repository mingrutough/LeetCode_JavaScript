/*
 * @Author: mingru 
 * @Date: 2017-09-28 10:58:59 
 * @Last Modified by: mingru
 * @Last Modified time: 2017-09-28 11:11:12
 */

// Given an array with n integers, your task is to check if it could become non- decreasing by modifying at most 1 element.

// We define an array is non- decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).

//     Example 1:
//     Input: [4, 2, 3]
// Output: True
// Explanation: You could modify the first 
// 4
// to
// 1
// to get a non- decreasing array.
//     Example 2:
// Input: [4, 2, 1]
// Output: False
// Explanation: You can't get a non-decreasing array by modify at most one element.
// Note: The n belongs to [1, 10, 000].

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 思路： 遇到 n[i] < n[i-1], 修改为non-decreasing的方式有两种，即修改n[i]或者n[i-1]。而最简单的方式就是修改n[i]为n[i-1]和修改n[i-1]为n[i]，
// 简单的分析可以得出各个情况下的修改方式。而修改的次数只能是一次，所以设置count计数。


var checkPossibility = function (nums) {

    var count = 1,
        i = 1;

    for (; i < nums.length; ++i) {
        if (nums[i] < nums[i - 1]) {
            if (count === 0) {
                return false;
            }
            if (i === 1 || nums[i] >= nums[i - 2]) {
                nums[i - 1] = nums[i];
            }
            else {
                nums[i] = nums[i - 1];
            }
            --count;
        }
    }
    return true;
};
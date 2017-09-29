/*
 * @Author: mingru 
 * @Date: 2017-09-29 09:57:58 
 * @Last Modified by: mingru
 * @Last Modified time: 2017-09-29 11:25:43
 */

// Rotate an array of n elements to the right by k steps.

// For example, with n = 7 and k = 3, the array [1, 2, 3, 4, 5, 6, 7] is rotated to [5, 6, 7, 1, 2, 3, 4].

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// method1, time complexity: O(n*k); space complexity: O(1)
var rotate = function (nums, k) {
    var len = nums.length,
        i = 0,
        j = len - 1,
        temp = 0;
    for (; i < k; ++i) {
        temp = nums[len - 1];
        for (; j >= 1; j--) {
            nums[j] = nums[j - 1];
        };
        j = len - 1;
        nums[0] = temp;
    };
};

// method2 , use extra array. time complexity: O(n),space complexity: O(n)

var rotate = function (nums, k) {
    var arrTemp = [];
    for (var i = 0; i < nums.length; i++) {
        arrTemp[(i + k) % nums.length] = nums[i];
    };
    nums.forEach(function (item, index) {
        nums[index] = arrTemp[index];
    });
};

// method3, This approach is based on the fact that when we rotate the array k times, kk elements from the back end of the array come to the front and the rest of the elements from the front shift backwards.

// In this approach, we firstly reverse all the elements of the array.Then, reversing the first k elements followed by reversing the rest n-k elements gives us the required result.

var rotate = function (nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};
var reverse = function (nums, start, end) {
    while (start < end) {
        var temp = nums[end];
        nums[end] = nums[start];
        nums[start] = temp;
        start++;
        end--;
    };
};
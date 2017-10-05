/*
 * @Author: mingru 
 * @Date: 2017-10-05 23:14:40 
 * @Last Modified by: mingru
 * @Last Modified time: 2017-10-05 23:28:59
 */
// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// For example,
// Given [3,2,1,5,6,4] and k = 2, return 5.

// Note: 
// You may assume k is always valid, 1 ≤ k ≤ array's length.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 利用 分治法 注意：第K大数若与索引对应的话应为降序排列。
var findKthLargest = function (nums, k) {
    var left = 0,
        right = nums.length - 1;
    while (true) {
        var pivotIndex = partition(nums, left, right);
        if (pivotIndex + 1 > k) {
            right = pivotIndex - 1;
        } else if (pivotIndex + 1 < k) {
            left = pivotIndex + 1;
        } else {
            return nums[pivotIndex];
        }
    }
};

var partition = function (nums, left, right) {
    var pivot = nums[left];
    while (left < right) {
        while (left < right && nums[right] < pivot) {
            right--;
        }
        if (left < right) {
            nums[left++] = nums[right];
        }
        while (left < right && nums[left] >= pivot) {
            left++;
        }
        if (left < right) {
            nums[right--] = nums[left];
        };
    };
    nums[left] = pivot;
    return left;
};

findKthLargest([2, 1], 1);
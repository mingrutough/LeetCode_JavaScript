/*
 * @Author: mingru 
 * @Date: 2017-09-20 20:20:49 
 * @Last Modified by: mingru
 * @Last Modified time: 2017-09-20 20:26:32
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


// 思路， 哈希结构对索引的查找时间复杂度为O(1)。
var twoSum = function (nums, target) {
	var hash = {};
	var ans = [];
	nums.forEach((item, index) => {
		var val = target - item;
		if (hash[val] === undefined) { // hash数组中有与val值相等的索引，说明二者之和为target.
			hash[item] = index;
		} else {
			ans.push(hash[val]);
			ans.push(index);
		};
	});
	return ans;
};
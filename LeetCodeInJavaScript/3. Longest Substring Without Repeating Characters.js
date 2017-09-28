/*
 * @Author: mingru 
 * @Date: 2017-09-26 15:19:28 
 * @Last Modified by: mingru
 * @Last Modified time: 2017-09-28 10:40:53
 */
// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */


// 思路：[j,i)区间表示s中非重复子字符串，每次i的增长都会计算一次非重复子字符串的长度，
// 若s[i]在[j,i)中不重复，则i++；若s[i]在[j,i)中有重复，则将j移动到对应重复项索引的位置后一位，之所以j的值是hash[s[i]]+1和j之中的最大值
// 是为了防止j往回走。
var lengthOfLongestSubstring = function (s) {
    var hash = {};
    var ans = 0,
        i = 0,
        j = 0;
    for (; i < s.length; i++) {
        if (hash[s[i]] !== undefined) {
            j = Math.max((hash[s[i]] + 1), j);
        }
        ans = Math.max(ans, i - j + 1); // 记录每一次指针移动的非重复子字符串最大值。
        hash[s[i]] = i;
    }
    return ans;
};

var str = "abcabcbb";
var maxSubLen = lengthOfLongestSubstring(str);
console.log(maxSubLen);
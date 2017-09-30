/*
 * @Author: mingru 
 * @Date: 2017-09-30 11:16:33 
 * @Last Modified by: mingru
 * @Last Modified time: 2017-09-30 11:25:06
 */


// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.


/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
// 二分查找
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */

    return function (n) {
        var start = 1,
            end = n,
            ans = -1;
        while (start <= end) {
            if (isBadVersion(parseInt((start + end) / 2))) {
                ans = parseInt((start + end) / 2);
                end = parseInt((start + end) / 2) - 1;
            } else {
                start = parseInt((start + end) / 2) + 1;
            };
        };
        return ans;
    };
};
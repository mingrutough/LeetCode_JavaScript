/*
 * @Author: mingru 
 * @Date: 2017-09-30 16:04:39 
 * @Last Modified by: mingru
 * @Last Modified time: 2017-09-30 17:18:17
 */

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// For example,
// "A man, a plan, a canal: Panama" is a palindrome.
// "race a car" is not a palindrome.

// Note:
// Have you consider that the string might be empty? This is a good question to ask during an interview.

// For the purpose of this problem, we define empty string as valid palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    var len = s.length,
        i = 0,
        j = len - 1;
    if (len === 0 || len === 1) {
        return true;
    }
    while (i < j) {
        if (!isLetterOrNumber(s[i])) {
            i++;
            continue;
        }
        if (!isLetterOrNumber(s[j])) {
            j--;
            continue;
        }
        if (s[i].toUpperCase() === s[j].toUpperCase()) {
            i++;
            j--;
        } else {
            return false;
        };
    }
    return true;

};

var isLetterOrNumber = function (str) {
    var reg = /[a-zA-Z0-9]/;
    if (reg.test(str)) {
        return true;
    } else {
        return false;
    }
};
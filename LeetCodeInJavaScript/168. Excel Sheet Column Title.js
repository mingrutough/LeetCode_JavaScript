/*
 * @Author: mingru 
 * @Date: 2017-09-30 15:26:59 
 * @Last Modified by: mingru
 * @Last Modified time: 2017-09-30 15:38:54
 */

// Given a positive integer, return its corresponding column title as appear in an Excel sheet.

// For example:

// 1 -> A
// 2 -> B
// 3 -> C
//     ...
// 26 -> Z
// 27 -> AA
// 28 -> AB 

/**
 * @param {number} n
 * @return {string}
 */

// 思路 该问题的实质就是进制转换。将十进制转换为26进制，并将二十六进制中的每个数字转换为26个英文字母。
var convertToTitle = function (n) {
    var ans = '';
    while (n !== 0) {
        n = n - 1;
        var remain = n % 26;
        ans = String.fromCharCode(65 + remain) + ans; // String.fromCharCode 方法返回使用指定的Unicode值序列创建的字符串。65是大写字母A对应的Unicode值。
        n = parseInt(n / 26);
    };
    return ans;
};
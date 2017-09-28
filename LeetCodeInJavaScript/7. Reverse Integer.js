/*
 * @Author: mingru 
 * @Date: 2017-09-28 14:24:41 
 * @Last Modified by: mingru
 * @Last Modified time: 2017-09-28 15:16:00
 */
// Reverse digits of an integer.

// Example1: x = 123, return 321
// Example2: x = -123, return -321

// click to show spoilers.

// Note:
// The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var ans = 0,
        tail = 0,
        newAns = 0;
    while (x !== 0) {
        tail = x % 10;
        newAns = ans * 10 + tail;
        // if ((newAns - tail) / 10 !== ans) { // js中的数字是64位浮点数，所以当数字为32为INT_MAX时，不会溢出。
        //     return 0;
        // };
        if (Math.abs(newAns) > 0x7FFFFFFF) {
            return 0;
        };
        ans = newAns;
        if (x > 0) {
            x = Math.floor(x / 10);
        } else {
            x = Math.ceil(x / 10);
        }

    };
    return ans;
};

var ans = reverse(-900000);
console.log(ans);
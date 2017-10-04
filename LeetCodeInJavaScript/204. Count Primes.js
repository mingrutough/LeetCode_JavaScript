/*
 * @Author: mingru 
 * @Date: 2017-09-30 17:52:19 
 * @Last Modified by: mingru
 * @Last Modified time: 2017-10-04 16:26:13
 */

// Description:

// Count the number of prime numbers less than a non-negative number, n.

/**
 * @param {number} n
 * @return {number}
 */
// 曲线救国,先标记出所有非质数，剩下的就都是质数。
var countPrimes = function (n) {
    var primeFlag = [],
        count = 0,
        limit = Math.sqrt(n);
    for (var i = 2; i <= limit; i++) {
        for (var j = 2; j * i < n; j++) {
            primeFlag[i * j] = true;
        }
    }
    for (var i = 2; i < n; i++) {
        if (!primeFlag[i]) {
            count++;
        }
    }
    return count;
};




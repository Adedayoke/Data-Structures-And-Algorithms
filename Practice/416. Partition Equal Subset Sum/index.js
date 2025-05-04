/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((a, b) => a + b, 0);

    if (sum % 2 !== 0) return false;

    return true;
};


console.log(canPartition([1, 5, 11, 5]));
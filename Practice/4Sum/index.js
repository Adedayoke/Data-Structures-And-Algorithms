/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let p1 = j + 1;
      let p2 = nums.length - 1;

      while (p1 < p2) {
        let sum = nums[i] + nums[j] + nums[p1] + nums[p2];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[p1], nums[p2]]);
          while (p1 < p2 && nums[p1] === nums[p1 + 1]) p1++;
          while (p1 < p2 && nums[p2] === nums[p2 - 1]) p2--;
          p1++;
          p2--;
        } else if (sum < target) {
          p1++;
        } else {
          p2--;
        }

        // console.log("p1 is now " + p1);
        // console.log("p2 is now " + p2);
      }
    }
  }
  return result;
};

// console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2, 2, 2, 2, 2], 8)); // [[2,2,2,2]]
// console.log(fourSum([-2,-1,-1,1,1,2,2], 0)); // [[2,2,2,2]]
// console.log(fourSum([1000000000, -1, -1, -1], 999999997)); // [[2,2,2,2]]

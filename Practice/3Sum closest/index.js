/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (arr, target) {
  const nums = arr.sort((a, b) => a - b);
//   console.log(nums, target);
  let smallest;
  let smallestDiff;
  for (let i = 0; i < nums.length; i++) {
    let currVal = nums[i];
    let p1 = i + 1;
    let p2 = nums.length - 1;
    while (p1 < p2) {
      const value = currVal + nums[p1] + nums[p2];
      const currentDiff = Math.abs(target - value);
    //   console.log("For: ", currVal, nums[p1], nums[p2]);
    // //   console.log(
    //     // `Value: ${value}, currentDiff: ${currentDiff}, smallest: ${smallest}`
    // //   );

      if (isNaN(smallest)) {
        smallest = value;
        smallestDiff = currentDiff;
      }
      // console.log(Math.abs(smallest), currentDiff);
    //   console.log("comparing*********************", Math.abs(smallestDiff), currentDiff)
      if (Math.abs(smallestDiff) >= currentDiff) {
        smallest = value;
        smallestDiff = currentDiff;
        // console.log("Updated smallest: ", smallest);
        // console.log("Updated smallestDiff: ", smallestDiff);
      }

      if (value >= target) {
        p2--;
      } else {
        p1++;
      }
    }
  }

  // console.log(resultObj);
//   console.log(smallest);
  return smallest;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([-4,2,2,3,3,3], 0));
console.log(threeSumClosest([0, 0, 0], 1));
console.log(threeSumClosest([10, 20, 30, 40, 50, 60, 70, 80, 90], 1));
console.log(threeSumClosest([1, 1, 1, 0], 100));
console.log(threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2));
console.log(
  threeSumClosest(
    [
      1, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
      14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
      14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
      14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
      14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
      14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
      14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 19, 19,
      19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19,
      19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19,
      19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19,
      19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19,
      19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19,
      19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19,
      19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 29,
    ],
    45
  )
);

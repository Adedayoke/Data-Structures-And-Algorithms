/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  nums.sort((a, b) => b - a);
  let p1 = 0;
  let p2 = nums.length - 1;
  let count = nums.length;
  // console.log("nums:", nums)
  if (nums.length === 0) return 0;
  if (nums.length === 1 && nums[0] === val) return 0;

  while (p1 <= p2 && p2 < nums.length) {
    // console.log(p1,p2)
    let currentCheck = nums[p1];
    if (nums[p2] === val) {
      count--;
      p2--;
      continue;
    }
    if (currentCheck === val) {
      // console.log("Swapping", nums[p1], nums[p2])
      count--;
      let temp = nums[p2];
      nums[p2] = nums[p1];
      nums[p1] = temp;
      p2--;
      // console.log(nums)
    }
    p1++;
  }
  console.log("Final nums:", nums);
  return count;
};

console.log(removeElement([3, 2, 2, 3], 3)); // [2,2,"_","_"]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // [2,2,"_","_"]
console.log(removeElement([1], 1)); // [2,2,"_","_"]
console.log(removeElement([3, 3], 3)); // [2,2,"_","_"]
console.log(removeElement([2, 2, 2], 2)); // [2,2,"_","_"]

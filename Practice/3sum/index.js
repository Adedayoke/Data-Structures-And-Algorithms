function threeSum(arr) {
  const nums = arr.sort((a, b)=> a - b);
  const result = [];
  const checkObj = {}
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let currVal = nums[i];
    let p1 = i + 1;
    let p2 = nums.length - 1;
    while (p1 < p2) {
        const currentSum = nums[p1] + nums[p2];
      if (currentSum === currVal * -1) {
        const key = [currVal, nums[p1], nums[p2]].join(',');
        if (!checkObj[key]) {
            result.push([currVal, nums[p1], nums[p2]]);
            checkObj[key] = true;   
        }
        p1++;
      } else if (currentSum < currVal * -1) {
        p1++;
      } else if (currentSum > currVal * -1) {
        p2--;
      }
    }
  }
  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0,1,1]));
console.log(threeSum([0,0,0]));
console.log(threeSum([0,0,0,0]));
console.log(threeSum([-2,0,1,1,2]));

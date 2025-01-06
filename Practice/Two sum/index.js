// Question:
// Given an array of integers, return the indices of the two numbers that add up to a given target

const nums = [1, 3, 7, 9, 2];
const target = 11;

// My solution
// function findTwoSum (array, targ){
//     for (var i = 0; i < array.length; i++) {
//         for (var j = i + 1; j < array.length; j++) {
//           const numberToFind = targ - array[i]
//           if(array[j]===numberToFind){
//               return [i, j]
//           }
//         }
//       }
// }
// const result = findTwoSum(nums, target)
// console.log(result)

// his code
// function findTwoSum (nums, target){
//     for (var p1 = 0; p1 < nums.length; p1++) {
//         const numberToFind = target - nums[p1]
//         for (var p2 = p1 + 1; p2 < nums.length; p2++) {
//           if(nums[p2]===numberToFind){
//               return [p1, p2]
//           }
//         }
//     }
//     return null;
// }
// const result = findTwoSum(nums, target)
// console.log(result)

//OPTIMIZED SOLUTION
function findTwoSum(nums, target) {
  let numsMap = {};
  for (let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]];
    if (currentMapVal >= 0) {
        console.log(numsMap)
      return [currentMapVal, p];
    } else {
      const numberToFind = target - nums[p];
      numsMap[numberToFind] = p
    }
  }
  return null;
}
const result = findTwoSum(nums, target)
console.log(result)
// // /**
// //  * @param {number[]} nums1
// //  * @param {number} m
// //  * @param {number[]} nums2
// //  * @param {number} n
// //  * @return {void} Do not return anything, modify nums1 in-place instead.
// //  */
// // function mergeArr(arr1, arr2) {
// //   let i = 0;
// //   let j = 0;
// //   const result = [];
// //   while (i < arr1.length && j < arr2.length) {
// //     if (arr1[i] < arr2[j]) {
// //       result.push(arr1[i]);
// //       i++;
// //     } else {
// //       result.push(arr2[j]);
// //       j++;
// //     }
// //   }
// //   while (i < arr1.length) {
// //     result.push(arr1[i]);
// //     i++;
// //   }
// //   while (j < arr2.length) {
// //     result.push(arr2[j]);
// //     j++;
// //   }
// //   return result;
// // }

// // function mergeSort(arr) {
// //   if (arr.length <= 1) return arr;
// //   let mid = Math.floor(arr.length / 2);
// //   let left = mergeSort(arr.slice(0, mid));
// //   let right = mergeSort(arr.slice(mid));
// //   console.log("result", arr);
// //   return mergeArr(left, right);
// // }
// // var merge = function (nums1, m, nums2, n) {
// //   if (m + n !== nums1.length) {
// //     return;
// //   }
// //   while (m < nums1.length) {
// //     console.log("merging");
// //     nums1[m] = nums2[m - n];
// //     m++;
// //   }
// //   console.log(nums1);
// //   return mergeSort(nums1);
// // };

// // // function mergeU
// // // var merge = function(nums1, m, nums2, n) {
// // //     nums1.splice(m)
// // //     nums1.pus
// // //     return nums1;
// // // }
// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function(nums1, m, nums2, n) {
//   let i = m - 1
//   let j = n - 1
//   let k = m + n - 1
//   while(i >= 0 && j >= 0){
//     console.log(i, j, k)
//       if(nums1[i] > nums2[j]){
//           nums1[k--] = nums2[i--]
//       }else{
//           nums1[k--] = nums2[j--]
//       }
//   }
//   return nums1
// };
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function swap(i, j, arr){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
 }
var sortedSquares = function(nums) {
    const resultArr = Array.from({length: nums.length}, ()=> 0)
    for(let i = 0; i < nums.length; i++){
        nums[i] = nums[i] * nums[i]
    }
    for(let j = 0; j < nums.length; j++){
        if(j === 0){
            resultArr[j] = nums[j]
        }else{
            if(resultArr[j] > nums[j]){
                resultArr[j + 1] = resultArr[j]
                resultArr[j] = nums[j]
            }else{
                
            }
        }
        
    }
    return resultArr;
};
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// function swap(i, j, arr){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//  }
// var sortedSquares = function(nums) {
//     for(let i = 0; i < nums.length; i++){
//         nums[i] = nums[i] * nums[i]
//     }
//     let i = 0;
//     let j = nums.length - 1;
//     while(i <= j){
//         console.log(nums[i], nums[j])
//         if(nums[i] > nums[j]){
//             swap(i, j, nums);
//             console.log("swapped", nums)
//             j--
//         }else{
//             if(nums[i] < nums[j - 1]){
//                 i++
//             }else{
//                 swap(i, j, nums);
//                 j--
//             }
//         }
//         console.log("noswap", nums)
//     }
//     return nums;
// };

// console.log(sortedSquares([-5,-3,-2,-1]));
// console.log(sortedSquares([-4,-1,0,3,10]));
// console.log(sortedSquares([-7,-3,2,3,11]));
console.log(sortedSquares([-1,0,4,4]));
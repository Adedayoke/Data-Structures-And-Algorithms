/**
 * Given a sorted array of integers, implement a function called search, that accepts a value and returns the index where the value is passed to the function is located. If the target is not found, return -1.
 *
 * Test Case 1: search([1,2,3,4,5], 3) // 2
 * Test Case 2: search([1,2,3,4,5], 6) // -1
 * Test Case 3: search([], 1) // -1
 * Test Case 4: search([-5,-3,0,1,4], -3) // 1
 */

// Brute force

// function search(arr, val) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === val) {
//             return i;
//         }
//     }
//     return -1;
// }

// Optimized solution
function search(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5], 3));

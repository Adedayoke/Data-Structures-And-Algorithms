// QUESTION
// You are given an array of positive integers where each integer represents the height of a vertical line on a container. find the two lines which together with the x axis forms a container that would hold the greatest amount of water. Return the area of water it would hold.

// function getMainWaterContainer(heights) {
//   var maxArea = 0;
//   for (var i = 0; i < heights.length; i++) {
//     for (var j = i + 1; j < heights.length; j++) {
//       const area = Math.min(heights[i], heights[j]) * (j - i);
//       maxArea = Math.max(area, maxArea);
//     }
//   }
//   return maxArea;
// }

// const Area = getMainWaterContainer([4, 8, 1, 2, 3, 9]);
// const Area = getMainWaterContainer([7, 1, 3, 4, 9])
// console.log(Area);

//Optimization

function getMainWaterContainer(heights) {
  let maxArea = 0;
  let j = heights.length - 1;
  let i = 0;
  while (i < j) {
    const area = Math.min(heights[i], heights[j]) * (j - i);
    maxArea = Math.max(area, maxArea);
    if (heights[i] < heights[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
}
const Area = getMainWaterContainer([4, 8, 1, 2, 3, 9]);
// const Area = getMainWaterContainer([0])
console.log(Area);

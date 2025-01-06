// Question
// Given and array of integers representing an elevation map where the width of each bar is 1, return how much rainwater can be trapped.

// const elevationMap = 
// function getTrappedWater(eleMap){
//     let total = 0

//     for(let i = 0; i < eleMap.length; i++){
//         let maxLeft = 0
//         let maxRight = 0
//         for(let j = i + 1; j < eleMap.length; j++){
//             maxRight = Math.max(eleMap[j], maxRight)
//         }
//         for(let k = i - 1; k >= 0 && k < eleMap.length; k--){
//             maxLeft = Math.max(eleMap[k], maxLeft)
//         }
//         const currentWater = Math.min(maxLeft, maxRight) - eleMap[i]
//         if(currentWater >= 0){
//             total += currentWater
//         }
//     }
//     return total

// }

// const test1 = getTrappedWater([0,1,0,2,1,0,3,1,0,1,2])

//Optimization

//!Failed
function getTrappedWater(heights){
    let maxLeft = 0
    let maxRight = 0
    let pl = 0
    let pr = heights.length - 1
    let total =0
    while(pl !== pr){
        if(heights[pl] < heights[pr]){
            if(heights[pl] >= maxLeft){
                maxLeft = heights[pl]
            }else{
                total += maxLeft - heights[pl]
            }
            pl++
        }else{
            if(heights[pr] >= maxRight){
                maxRight = heights[pr]
            }else{
                total += maxRight - heights[pr]
            }
            pr--
        }

    }
    return total;
}

const test1 = getTrappedWater([0,1,0,2,1,0,3,1,0,1,2])
console.log(test1)
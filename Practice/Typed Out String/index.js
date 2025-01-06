// My solution
// function finalState(arr){
//     const finalArr = [];
// for(let i =0; i < arr.length; i++){
//     if(arr[i] !== "#"){
//         finalArr.push(arr[i])
//     }else{
//         finalArr.pop()
//     }
// }
// return finalArr.join("")
// }
// function checkStrings(str1, str2){
//     const arr1 = str1.split("")
//     const arr2 = str2.split("")
//     if(finalState(arr1) === finalState(arr2)){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(checkStrings("ab#z", "az#z"))
// console.log(checkStrings("abc#z", "acc#z"))
// console.log(checkStrings("x#y#z#", "a#"))
// console.log(checkStrings("a###b", "b"))
// console.log(checkStrings("Ab#z", "az#z"))

//His solution
// function buildString(string) {
//   const builtArray = [];
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] !== "#") {
//       builtArray.push(string[i]);
//     } else {
//       builtArray.pop();
//     }
//   }
//   return builtArray;
// }

// function backSpaceCompare(s, t) {
//   const finalS = buildString(s);
//   const finalT = buildString(t);
//   if (finalS.length !== finalT.length) {
//     return false;
//   } else {
//     for (let i = 0; i < finalS.length; i++) {
//       if (finalS[i] !== finalT[i]) {
//         return false;
//       }
//     }
//     return true;
//   }
// }
// console.log(backSpaceCompare("ab#z", "az#z"))

//My optimized solution
function checkStrings(S, T){
    const p1 = S.length - 1
    const p2 = T.length - 1
    if(p1 !== p2){
        while(p1 !== 0 && p2 !== 0){
            if(S[p1] === T[p2]){
                
            }
        }
    }
    
}
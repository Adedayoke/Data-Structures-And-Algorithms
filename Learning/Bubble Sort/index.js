
function bubbleSort(arr){
    function swap(arr, idx1, idx2) {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j + 1]){
                swap(arr, j, j + 1)
            }
        }
    }
    
    return arr;
}
// To optimize out code, If we are given an array that requires little to no swaps, there will be some unnecessary checks done by the function. Therefore the following changes can be made

function bubbleSort(arr){
    // Es2014 swap method
    function swap(arr, idx1, idx2) {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true; // Assume there are no swaps
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j + 1]){
                swap(arr, j, j + 1)
                noSwaps = false; // since there is a swap, set noSwap state to false
            }
        }
        //break if there are no swaps
        if(noSwaps) break;
    }
    
    return arr;
}
console.log(bubbleSort([1,5, 2, 10, 99, 44]))
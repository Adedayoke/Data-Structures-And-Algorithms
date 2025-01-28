function swap(arr, i, j){
    const temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
}
function pivot(arr, start= 0, end = arr.length - 1){
    let pivot = arr[start]
    let swapIdx = start;
    for(let i = start + 1; i <= end; i++){
        if(arr[i] < pivot){
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }

    swap(arr, swapIdx, start);
    return swapIdx;
}


function quickSort(arr, left = 0 , right = arr.length - 1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right)

    }
    return arr
}

console.log(quickSort([4, -2,55, 8, 2, 1, 5, 7, 6, 3]))
console.log(quickSort([4,2,5, 1]))
// Helper to merge two sorted arrays 
// Uses pointers to compare elements in both arrays and push the smaller element to the result array then increment the pointer with the lower value and compares the value in the other pointer
function merge(arr1, arr2){
    let i = 0;
    let j = 0;
    const result = []
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        }else{
            result.push(arr2[j])
            j++
        }
    }
    while(i < arr1.length){
        result.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        result.push(arr2[j])
        j++
    }
    return result;
}

// Uses recursion to split the array into smaller arrays until they are of length 1 then merges them back in a sorted order
function mergeSort(arr){
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

mergeSort([2, 10, 1, 5, 99, 4, 56, 21, 12])
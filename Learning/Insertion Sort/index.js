function insertionSort(arr){
      for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i]
        for( var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            console.log(arr[i], arr[j])
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal
      }
      return arr
}

console.log(insertionSort([1, 99, 44, 5, 2, 10 ]))

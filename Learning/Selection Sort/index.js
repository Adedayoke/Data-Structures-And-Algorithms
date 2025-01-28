function selectionSort(arr){
    function swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
      }

      for(let i = 0; i < arr.length; i++){
        let min = i; //so that checking wil start only from the index iteration starts with
        for(let j = i + 1; j < arr.length; j++){
          //j is i + 1 because we want to start comparison only from the next index(of course we don't want to be comparing a value with itself)        
          if(arr[min] > arr[j]){
                min = j
            }
        }
        if(min !== i) swap(arr, i, min)
      }
      return arr
}

console.log(selectionSort([1,5, 2, 10, 99, 44]))
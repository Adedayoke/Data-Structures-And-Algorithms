function getMainArr(matrix,target){
    let p1 = 0;
    let p2 = matrix.length - 1;
    const searchArr = [];
    while(searchArr.length < 1){
        let midpoint = Math.floor((p1 + p2)/2);
        if(matrix[midpoint][0] > target) p2 = midpoint + 1;
        if(matrix[midpoint][0] < target) p1 = midpoint - 1;
        console.log(searchArr)
        if(p1 === p2){
            searchArr.push(matrix[p1])
        }
    }
    return searchArr
}

function searchMatrix(matrix, target){
    const mainArr = getMainArr(matrix, target)[0];
    let p1 = 0;
    let p2 = mainArr.length - 1;
    while(p1 < p2){
        let midpoint = Math.floor((p1 + p2)/2);
        if(mainArr[midpoint] === target) return true;
        if(mainArr[midpoint] > target) p2 = midpoint - 1;
        if(mainArr[midpoint] < target) p1 = midpoint + 1;
    }
    return false
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60], [62, 64, 66]], 60))
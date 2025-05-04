/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let p1 = 0;
    let p2 = p1 + 1;
    let count = 1
    if(nums.length === 0){
        return 0
    }

    while(p1 < p2 && p2 < nums.length){
        let num2 = nums[p2]
        if(nums[p1] === nums[p2]){
            nums[p2] = "_"
            p2++;
        }else{
            count++
            nums[p2] = "_";
            nums[p1 + 1] = num2;
            p1++;
            p2++
        }
    }

    console.log(nums)
    return count;
};

console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
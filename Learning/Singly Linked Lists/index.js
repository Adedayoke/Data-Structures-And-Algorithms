// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class SinglyLinkedList{
//     constructor(){
//         this.length = 0;
//         this.head = null;
//         this.tail = null;
//     }

//     push(val){
//         var newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head;
//         }else{
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length += 1
//         return this;
//     }
// }

// var list = new SinglyLinkedList()
// list.push(12)
// list.push(13)
// console.log(list.push(15))

// // console.log(list)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function filterDuplicates(arr){
    const obj = {}
    const mainResult = []
    
    for(let i = 0; i < arr.length; i++){
        obj[arr[i]] = arr[i]
    }
    console.log(obj)

    Object.values(obj).forEach((value) => {
        mainResult.push(value)
    })

    return mainResult
}
var threeSum = function(nums) {
    const result =[]
    let p1 = 0
    let p2 = p1 + 1;
    let p3 = p2 + 1;
    
    while(p1 <= nums.length - 3){
        console.log("pointers are:", p1,p2,p3)
        console.log(nums[p1], nums[p2], nums[p3], "result",  nums[p1] + nums[p2] + nums[p3])
        if(nums[p1] + nums[p2] + nums[p3] === 0){
            result.push([nums[p1], nums[p2], nums[p3]].sort())
        }
        p3++
        if(p3 >= nums.length){
            p2++;
            if(p2 < nums.length - 1){
                p3 = p2 + 1;
            }else{
                p1++;
                p2 = p1 + 1;
                p3 = p2 + 1;
            }
        }
        
    }
    console.log(result)
    const mainResult = filterDuplicates(result)
    return mainResult;
};

// console.log(threeSum([-1,0,1,2,-1,-4]))
// console.log(threeSum([0,0,0]))
// console.log(threeSum([-2,0,1,1,2]))
console.log(threeSum([3,0,-2,-1,1,2]))
// console.log(threeSum([0,0,0,0]))
// console.log(threeSum([0,0,1]))

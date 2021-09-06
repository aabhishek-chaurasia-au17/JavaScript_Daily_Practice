// Program for Reversal algorithm for array rotation

// Example :

// Input :  arr[] = [1, 2, 3, 4, 5, 6, 7]
//          d = 2
// Output : arr[] = [3, 4, 5, 6, 7, 1, 2] 

let arr = [1, 2, 3, 4, 5, 6, 7];

const getreversalarray = (arr,d) =>{
    for(let i = 0; i < d; i++){
        arr.pop(arr.unshift())
    }
    return arr
}

let d = 2;

console.log( getreversalarray(arr,d));
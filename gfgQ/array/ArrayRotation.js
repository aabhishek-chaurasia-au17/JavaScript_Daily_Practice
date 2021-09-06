// Program for array rotation
// Input arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2, n =7
// 1) Store d elements in a temp array
//    temp[] = [1, 2]
// 2) Shift rest of the arr[]
//    arr[] = [3, 4, 5, 6, 7, 6, 7]
// 3) Store back the d elements
//    arr[] = [3, 4, 5, 6, 7, 1, 2]



const getRotation = (arr, n) =>{
    for(let i = 0; i < n; i++){
       arr.unshift(arr.pop())
    }
    return arr
}

const arr = [1, 2, 3, 4, 5, 6, 7];
let n = 5;

console.log(getRotation(arr, n));
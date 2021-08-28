// JavaScript Program for factorial of a number

// Iterative Aproaches
function getfactorial(n) {
    if(n < 0){
        return 0
    }else if (n == 0 || n == 1) {
        return 1
    } else {    
        let fact = 1;
        for(let i = n; i >= 1; i--){
            fact = fact * i;
        }
        return fact
    }
}
console.log(getfactorial(5));


// Recursive Aproaches
function factorial(n){
    
    if(n == 0 || n == 1){
        return 1;
    
    }else{
        return n * factorial(n-1);
    }
}
let n = 5;
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);
// JavaScript Program for factorial of a number

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


const getPrimeNum = (num) => {
    
    if(num === 2){
        return('Prime Number');
    }else if(num > 1){
        for(let i = 2; i < num; i++){
            if(num % i !== 0){
                return('Prime Number')
            }else if(num === i*i ){
                return('Not Prime Number')
            }else{
                return('Not Prime Number')
            }
        }
    }else{
        return('1 is not a Prime Number')
    }   

}
console.log(getPrimeNum(0));

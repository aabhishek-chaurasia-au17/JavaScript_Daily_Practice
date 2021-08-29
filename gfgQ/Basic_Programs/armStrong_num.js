// Python Program to check Armstrong Number


let num = 153;
let temp = num;
let sum = 0;
let numlen = num.length
console.log(numlen);

while (temp > 0){
    let reminnder = temp % 10;
    sum += reminnder ** 3
    temp = parseInt(temp/10); 
}

if(sum == num){
    console.log(`${num} is a Armstrong number`);
}else{
    console.log(`${num} is not an Armstrong number`);
}

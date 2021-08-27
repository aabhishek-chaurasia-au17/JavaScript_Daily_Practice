// Write a JavaScript conditional statement to find the sign of product of three numbers. 
// Displab an alert boa with the specified sign. 

let a = 3;
let b = -7;
let c = 3;

if(a > 0 && b > 0 && c > 0){
    console.log("The sign is +");
}else if ( a < 0 && b < 0 && c < 0){
    console.log("The sign is -");
}else if ( a > 0 && b < 0 && c < 0){
    console.log("The sign is +");
}else if (a < 0 && b > 0 && c < 0){
    console.log("The sign is +");
}else{
    console.log("The sign is -");    
}
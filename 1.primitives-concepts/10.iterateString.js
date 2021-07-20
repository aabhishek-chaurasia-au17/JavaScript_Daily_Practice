// #### Q10
// ### Write a code to iterate over a string

// - String can be traversed using its string index or value as string can act like an iterable


let str = "abhishek"


for(let i =0; i < str.length; i++){
    console.log(str.charAt(i));
}



for(let index in str){
    console.log(str[index]);
}



for(let value of str){
    console.log(value);
}


[...str].forEach((value) => console.log(value));

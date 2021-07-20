// #### Q3
// ### Show the conversion from number to string and vice versa

// - Conversion between numbers and strings is a common practical use case

// number to string conversion
const num = 12;

//String(num);              // "12"
console.log(String(num));
// num.toString()            // "12"
console.log(num.toString());
// num + "";                 // "12"
console.log(num + "");


// string to number conversion
const num1 = "12";
// Number(str);               // 12
console.log(Number(num1));
// +num1                       // 12
console.log(+num1);
// parseInt(num1)              // 12
console.log(parseInt(num1));

// Notes
// If the number is floating, `parseFloat` can be used. `parseInt` and `parseFloat` are the methods present on the `Number` object also
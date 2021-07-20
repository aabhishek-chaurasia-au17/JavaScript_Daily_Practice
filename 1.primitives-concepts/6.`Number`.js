// #### Q6
// ### Show the frequently and commonly used methods available on `Number` object with coding examples

// - `isInteger` is used to check if the given number is integer or not
// - `parseInt` is used to convert a given value in to integer
// - `parseFloat` is used to convert a given value in to floating number
// - `isNan` is used to check if the given value is NaN or no
// - `toFixed` is used to limit the number of digits after the decimal place
// - `toPrecision` is used to limit the total number of digits to represent the number


// Number.isInteger(1.5);            // false
console.log(Number.isInteger(1.5));
// Number.isInteger(-15);            // true
console.log(Number.isInteger(-15));

// Number.parseInt('5.8');           // 5
console.log(Number.parseInt('5.8'));
// Number.parseInt('123x')           // 123
console.log(Number.parseInt('123x'));

// Number.parseFloat('5.86');        // 5.86
console.log(Number.parseFloat('5.86'));
// Number.parseFloat('-12.69x');     // -12.69
console.log(Number.parseFloat('-12.69x'));

// Number.isNaN(NaN);                // true
console.log(Number.isNaN(NaN));
// Number.isNaN("text" - 10);        // true
console.log(Number.isNaN("text" - 10));
// Number.isNaN("text");             // false
console.log(Number.isNaN("text"));


// 56.369.toFixed(2);                // 56.37
console.log(56.369.toFixed(2));
// 59..toFixed(3);                   // 59.000
console.log(59..toFixed(3));

// 32.458.toPrecision('3');          // 32.5
console.log(32.458.toPrecision('3'));
// 98.1.toPrecision(1);              // 9e+1
console.log(98.1.toPrecision(1));


// ##### Notes
// `NaN` is special type of number and this value is results by the invalid mathematical operations such as substraction of number and text
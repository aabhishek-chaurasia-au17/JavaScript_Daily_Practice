// Q2
// Show the different ways of concatenating numbers and strings

// - Concatenation of strings and numbers is a common practical use case


// numbers and strings
// 1 + '2';                            // 12
console.log(1 + '2');
// 1 + 2 + '3';                        // 33
console.log(1 + 2 + '3');
// 1 + 2 + '3' + '4';                  // 334
console.log(1 + 2 + '3' + '4');
// 1 + 'One';                          // 1One
console.log(1 + 'One');

// strings and numbers
// '1' + 2;                            // 12
console.log('1' + 2);
// '1' + '2' + 3;                      // 123
console.log('1' + '2' + 3);
// '1' + '2' + 3 + 4;                  // 1234
console.log('1' + '2' + 3 + 4);
// '1' + '2' + (3 + 4);                // 127
console.log('1' + '2' + (3 + 4));
// 'One' + 1;     // One1
console.log('One' + 1);

// mix of string and numbers
// 1 + 2 + '3' + '4' + 5 + 6;          // 33456
console.log(1 + 2 + '3' + '4' + 5 + 6);
// 1 + 2 + '3' + '4' + (5 + 6);        // 33411
console.log(1 + 2 + '3' + '4' + (5 + 6));
// '1' + '2' + (3 + 4) + 5 + '6';      // 12756
console.log('1' + '2' + (3 + 4) + 5 + '6');

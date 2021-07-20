// #### Q5
// ### Show the usage of `||`, `&&`, `??` and `!!` with code examples

// - The __logical OR__ (||) operator for a set of operands is true if and only if one or more of its operands is true
// - The __logical AND__ (&&) operator for a set of operands is true if and only if all of its operands are true
// - The __nullish coalescing operator__ (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand
// - The __double NOT__ (!!) operator used to explicitly force the conversion of any value to the corresponding boolean primitive


const num1 = 10, num2 = 20;

// true || false;                // true
console.log(true || false);
// false || false;               // false
console.log(false || false);
// false || num1;                // 10
console.log(false || num1);
// 0 || num2;                    // 20
console.log(0 || num2);
// "text" || true                // "text"
console.log("text" || true);
// num1 > 0 || num2 < 0          // true
console.log(num1 > 0 || num2 < 0);

// true && true;                 // true
console.log(true && true);
// true && false;                // false
console.log(true && false);
// true && num1;                 // 10
console.log(true && num1);
// num1 && num2;                 // 20
console.log(num1 && num2);
// "text" && (num1 + num2)       // 30
console.log("text" && (num1 + num2));
// num1 > 0 && num2 < 0          // false
console.log(num1 > 0 && num2 < 0);

// // undefined ?? 10;              // 10
// console.log(undefined ?? 10);
// // null ?? 20;                   // 20
// console.log(null ?? 20);
// // false ?? num1;                // false
// console.log(false ?? num1);
// // 0 ?? num2;                    // 0
// console.log(0 ?? num2);

// !!10;                         // true
console.log(!!10);
// !!{};                         // true
console.log(!!{});
// !!"";                         // false
console.log(!!"");
// !!0;                          // false
console.log(!!0);

// #### Notes
// It is not possible to combine both the AND (&&) and OR operators (||) directly with ??
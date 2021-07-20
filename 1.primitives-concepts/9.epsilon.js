// #### Q9
// ### How can we solve the problem of comparision of 0.1 + 0.2 with 0.3 where `===` operator fails

// - The addition of 0.1 and 0.2 will result in to 0.30000000000000004 and the comparision with 0.3 fails
// - `Number.epsilon` is 2<sup>-52</sup>, which can be used to verify if this decimal values are matching


console.log(0.1 + 0.2 - 0.3 < Number.EPSILON)          // true

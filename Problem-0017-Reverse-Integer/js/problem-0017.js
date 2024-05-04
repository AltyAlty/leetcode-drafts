/*
Reverse Integer (#7)

Given a signed 32-bit integer "x", return "x" with its digits reversed. If reversing "x" causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// My solution

var reverse = function (x) {
    if (x <= 9 && x >= -9) return x;
    var xString = x.toString();
    var isNegative = false;

    if (xString[0] === '-') {
        isNegative = true;
        xString = xString.slice(1);
    };

    xStringArray = xString.split('');
    xStringArray = xStringArray.reverse();
    xString = xStringArray.join('');

    for (let i = 0; i < xString.length; i++) {
        if (xString[i] === 0) {
            xString = xString.slice(1);
            i--;
        } else {
            break;
        };
    };

    if (isNegative) { xString = '-' + xString };
    var result = Number(xString);

    if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
        return 0;
    } else {
        return result;
    };
};

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Not my solution but works faster

// var reverse = function (x) {
//     // const isNegative = x < 0;
//     // let reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));
//     // if (isNegative) reversed *= -1;
//     // if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) return 0;
//     // return reversed;

//     // reverse using while loop

//     let reversed = 0;

//     while (x !== 0) {
//         const digit = x % 10; // Extract the last digit
//         x = Math.trunc(x / 10); // Remove the last digit from the number

//         // Check if reversing x will cause it to go outside the 32-bit integer range
//         if (reversed > Math.pow(2, 31) / 10 || (reversed === Math.pow(2, 31) / 10 && digit > 7)) {
//             return 0; // Return 0 if outside the range
//         };

//         if (reversed < Math.pow(-2, 31) / 10 || (reversed === Math.pow(-2, 31) / 10 && digit < -8)) {
//             return 0; // Return 0 if outside the range
//         };

//         reversed = (reversed * 10) + digit; // Build the reversed number
//     };

//     return reversed;
// };

// Not my solution but uses less memory

// var reverse = function(x) {
//     const MAX_INT = Math.pow(2,31) - 1; // range: [-2147483648, 2147483647]
//     const orderOfMax = MAX_INT.toString().length;
//     const isNegative = x < 0 ? true : false;

//     // transform to array of characters
//     let sReversed = x.toString().split("").toReversed();

//     // clean data: remove "-" sign and leading zeros
//     if (isNegative) sReversed.pop();
//     while (sReversed[0] === "0"  && sReversed.length > 1) sReversed.shift();

//     // check that reversed is within range
//     if (sReversed.length > orderOfMax) return 0;

//     if (sReversed.length === orderOfMax) {
//         const charsMax = MAX_INT.toString().split("");

//         if (isNegative) {
//             charsMax.pop();
//             charsMax.push("8");
//         };

//         for (let i = 0; i < sReversed.length; i++) {
//             if (sReversed[i] > charsMax[i]) return 0;
//             if (sReversed[i] < charsMax[i]) break;
//         };
//     } ;

//     // recompose reversed value from array of characters
//     return parseInt( (isNegative ? "-" : "") + sReversed.join("") );
// };

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(1534236469)); // 0
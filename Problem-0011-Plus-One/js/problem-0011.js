/*
Plus One (#66)

You are given a large integer represented as an integer array "digits", where each "digits[i]" is the ith digit of the integer. The digits are 
ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// My solution

var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (i === digits.length - 1) {
            digits[i] += 1;
        };

        if (i < digits.length - 1) {
            if (digits[i + 1] >= 10) {
                digits[i + 1] -= 10;
                digits[i] += 1;
            };
        };

        if (i === 0) {
            if (digits[i] >= 10) {
                digits[i] -= 10;
                digits.unshift(1);
            };
        };
    };

    return digits;
};


/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Not my solution but works faster

// var plusOne = function (digits) {
//     let addNext = true;

//     for (let i = digits.length - 1; i >= 0 && addNext; i--) {
//         digits[i] += 1;

//         if (digits[i] > 9) {
//             digits[i] = 0;
//             addNext = true;
//         } else {
//             addNext = false;
//         };
//     };

//     if (addNext) {
//         digits.unshift(1)
//     };

//     return digits;
// };

// Not my solution but uses less memory

// var plusOne = function (digits) {
//     let idx = digits.length - 1;

//     while (idx >= 0) {
//         ++digits[idx];
//         if (digits[idx] < 10) break;
//         digits[idx] = 0;
//         --idx;
//     };

//     if (idx < 0) { digits.unshift(1) };

//     return digits;
// };

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

console.log(plusOne([1, 2, 3])); // [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])); // [4, 3, 2, 2]
console.log(plusOne([9])); // [1, 0]
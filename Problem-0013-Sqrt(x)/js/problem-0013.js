/*
Sqrt(x) (#69)

Given a non-negative integer "x", return the square root of "x" rounded down to the nearest integer. The returned integer should be
non-negative as well. You must not use any built-in exponent function or operator.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// My solution

var mySqrt = function (x) {
    if (x === 0) return 0;
    var guess = x / 2;
    var previousGuess = 0;
    // console.log('Initial guess: ' + guess);

    if (guess * guess === x) {
        return guess;
    } else {
        while (guess * guess !== x) {
            previousGuess = guess;
            guess = guess - (guess - x / guess) / 2; // guessing algorithm
            // console.log('Next guess: ' + guess);
            if (guess === previousGuess || guess * guess < x) { return Math.floor(guess) };

            // if (guess === previousGuess) {
            //     console.log('guess' + guess);
            //     console.log('previousGuess' + previousGuess);
            //     return Math.floor(guess);
            // };

            // if (guess * guess < x) {
            //     console.log('guess * guess: ' + (guess * guess));
            //     console.log('previousGuess - guess: ' + (previousGuess - guess));
            //     console.log(`${guess} < result < ${previousGuess}`);
            //     return Math.floor(guess);
            // };
        };

        return Math.floor(guess);
    };
};

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Not my solution but works faster

// var mySqrt = function (x) {
//     if (x === 0) return 0;
//     let min = 1, max = x; // 1, 8
//     // console.log('min: ' + min);
//     // console.log('max: ' + max);
//     // console.log('------');

//     while (min + 1 < max) { // 1 + 1 < 8 => 1 + 1 < 4 => 2 + 1 < 4 => 2 + 1 < 3
//         const curr = Math.floor((min + max) / 2); // (1 + 8) / 2 = 4 => (1 + 4) / 2 = 2 => (2 + 4) / 2 = 3
//         const squared = curr * curr; // 16 => 4 => 9
//         if (squared === x) return curr;
//         if (squared < x) min = curr; // min = 2
//         if (squared > x) max = curr; // max = 4 => max = 3

//         // console.log('curr: ' + curr);
//         // console.log('squared: ' + squared);
//         // console.log('min: ' + min);
//         // console.log('max: ' + max);
//         // console.log('------');
//     };

//     return min; // 2
// };

// Not my solution but uses less memory (unethical)

// var mySqrt = function(x) {
//     return Math.floor(x**.5)
// };

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

console.log(mySqrt(1)); // 1
console.log(mySqrt(4)); // 2
console.log(mySqrt(9)); // 3
console.log(mySqrt(16)); // 4
console.log(mySqrt(25)); // 5
console.log(mySqrt(36)); // 6
console.log(mySqrt(49)); // 7
console.log(mySqrt(64)); // 8
console.log(mySqrt(81)); // 9

console.log(mySqrt(5)); // 2
console.log(mySqrt(8)); // 2
console.log(mySqrt(63)); // 7

console.log(mySqrt(2147483647)); // 46340
console.log(mySqrt(1085817232)); // 32951
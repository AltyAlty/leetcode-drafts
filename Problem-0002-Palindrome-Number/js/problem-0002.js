/* 
Palindrome Number (#9)

Given an integer x, return true if x is a palindrome, and false otherwise.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// My solution

var isPalindrome = function (x) {
    let xString = x.toString();
    let step = 0;

    for (let i = 0; i < xString.length; i++) {
        if (xString.at(0 + step) !== xString.at(-1 - step)) { return false };
        step++;
    };

    return true;
};


/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Not my solution but faster

// var isPalindrome = function (x) {
//     let newX = x.toString();
//     let left = 0, right = newX.length - 1;

//     while (left < right) {
//         if (newX[left] == newX[right]) {
//             left++;
//             right--;
//         } else {
//             return false;
//         };
//     };

//     return true;
// };


// Not my solution but uses less memory

// var isPalindrome = function (x) {
//     let n = x;
//     let rev = 0;

//     while (n > 0) {
//         let temp = n % 10;
//         console.log('temp is ' + temp); // 1 => 2 => 3 => 3 => 2 => 1

//         console.log('rev is ' + rev); // 0 => 1 => 12 => 123 => 1233 => 12332 => 123321
//         rev = rev * 10 + temp;

//         console.log('n is ' + n); // 123321 => 12332 => 1233 => 123 => 12 => 1 => 0
//         n = Math.floor(n / 10);
//     };

//     return rev == x;
// };


/*--------------------------------------------------------------------------------------------------------------------------------------------*/

console.log(isPalindrome(123321)); // true
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // true
console.log(isPalindrome(123)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(11)); // true
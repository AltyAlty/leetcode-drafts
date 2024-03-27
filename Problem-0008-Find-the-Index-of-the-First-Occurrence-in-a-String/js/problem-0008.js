/*
Find the Index of the First Occurrence in a String (#28)

Given two strings "needle" and "haystack", return the index of the first occurrence of "needle" in "haystack", or -1 if "needle" is not part 
of haystack.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// My solution

// var strStr = function(haystack, needle) {
//     return haystack.indexOf(needle);
// };

// My solution, but based on another solution without using "substring()"

var strStr = function (haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        let tempWordArray = [];
        let tempWord = '';
        for (let j = 0; j < needle.length; j++) { tempWordArray[j] = haystack[i + j] };
        // console.log(tempWordArray);
        tempWord = tempWordArray.join('');
        // console.log(tempWord);
        if (needle === tempWord) { return i };
    };

    return -1;
};

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Not my solution but uses less memory

// var strStr = function (haystack, needle) {
//     let needleLength = needle.length;

//     for (let i = 0; i < haystack.length; i++) {
//         if (needle === haystack.substring(i, i + needleLength)) {
//             return i;
//         };
//     };

//     return -1;
// };

// Not my solution but doesn't use built-in methods

// const strStr = (haystack, needle) => {
//     if (needle === '' || needle === haystack) return 0;
//     if (haystack.length < needle.length) return -1;

//     for (let i = 0; i < haystack.length - needle.length + 1; i++) { // start looping through haystack until the remaining substring is shorter than needle
//         if (haystack[i] === needle[0]) { // as soon as we see a character that matches the first character of needle
//             for (let j = 0; j < needle.length; j++) { // start looping through both needle and haystack
//                 if (needle[j] !== haystack[i + j]) { // as soon as the characters don't match
//                     break; // break out of the loop and return to looping through haystack
//                 } else if (j === needle.length - 1) { // otherwise, if we looped through the entire needle and all of the characters matched
//                     return i; // return the index of the first character of haystack with which we started the loop
//                 };
//             };
//         };
//     };

//     return -1; // return -1 if there wasn't a match
// };

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

console.log(strStr('sadbutsad', 'sad')); // 0
console.log(strStr('leetcode', 'leeto')); // -1
console.log(strStr('hello', 'll')); // 2
console.log(strStr('hell', 'll')); // 2
console.log(strStr('helolllo', 'll')); // 4
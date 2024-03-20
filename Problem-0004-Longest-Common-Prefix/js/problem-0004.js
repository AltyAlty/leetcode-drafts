/*
Longest Common Prefix (#14)

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// My solution (omg it's terrible)

var longestCommonPrefix = function (strs) {
    let shortestLength = 0;
    let shortestIndex = 0;

    for (let i = 0; i < strs.length; i++) {
        if (i === 0) {
            shortestLength = strs[i].length;
            shortestIndex = i;
        };

        if (strs[i].length < shortestLength) {
            shortestLength = strs[i].length;
            shortestIndex = i;
        };
    };

    let result = '';

    loop1: for (let i = 0; i < shortestLength; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (j !== strs.length - 1 && strs[j][i] !== strs[j + 1][i]) {
                break loop1;
            };
        };

        result = result + strs[shortestIndex][i];
    };

    return result;
};

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Not my solution but faster

// var longestCommonPrefix = function (strs) {
//     if (strs.length === 0) return ''; // If the array is empty, return an empty string.
//     let prefix = strs[0]; // Initialize the prefix with the first string.

//     for (let i = 1; i < strs.length; i++) {
//         while (strs[i].indexOf(prefix) !== 0) {
//             prefix = prefix.substring(0, prefix.length - 1); // Reduce the prefix until it matches the current string.
//             if (prefix === '') return ''; // If prefix becomes empty, return an empty string
//         };
//     };

//     return prefix;
// };

// Not my solution but uses less memory

// var longestCommonPrefix = function (strs) {
//     let prefix = strs[0];

//     strs.map(
//         (el) => {
//             if (prefix.length > el.length) {
//                 prefix = prefix.slice(0, el.length);
//             };

//             while (prefix !== el.slice(0, prefix.length)) {
//                 prefix = prefix.slice(0, prefix.length - 1);
//             };
//         }
//     );

//     return prefix;
// };

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // 'fl'
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // '' 
console.log(longestCommonPrefix(['sad', 'saddest', 'sap'])); // 'sa'
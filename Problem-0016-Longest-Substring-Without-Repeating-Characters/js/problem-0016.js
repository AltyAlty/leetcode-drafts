/*
Longest Substring Without Repeating Characters (#3)

Given a string "s", find the length of the longest substring without repeating characters.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// My solution (my attempt to implement window sliding technique)

// var lengthOfLongestSubstring = function (s) {
//     if (s.length === 0) return 0;
//     if (s.length === 1) return 1;

//     var currentStrings = [];
//     var currentString = [];
//     var originalIndex = 0;

//     for (let i = 0; i < s.length; i++) {
//         console.log('i before: ' + i);

//         if (i === 0) {
//             currentString.push(s[i]);
//         } else if (!currentString.includes(s[i])) {
//             currentString.push(s[i]);
//         } else {
//             currentStrings.push(currentString);
//             i = originalIndex + 1;
//             originalIndex++;
//             currentString = [s[i]];
//         };

//         if (i === s.length - 1 || currentStrings.length === 0) {
//             currentStrings.push(currentString);
//         };

//         console.log('originalIndex: ' + originalIndex);
//         console.log('i after: ' + i);
//         console.log('s[i]: ' + s[i]);
//         console.log('currentString: ' + currentString);
//         console.log('currentStrings: ' + currentStrings);
//         console.log('------------');
//     };

//     console.log(currentStrings);

//     var maxSize = 0;

//     for (let i = 0; i < currentStrings.length; i++) {
//         if (currentStrings[i].length > maxSize) {
//             maxSize = currentStrings[i].length;
//         };
//     };

//     console.log(maxSize);

//     return maxSize;
// };

// var lengthOfLongestSubstring = function (s) {
//     if (s.length === 0) return 0;
//     if (s.length === 1) return 1;

//     var currentStrings = [];
//     var currentString = '';

//     for (let i = 0; i < s.length; i++) {
//         if (i === 0) {
//             currentString = s[i];
//         } else if (!currentString.includes(s[i])) {
//             currentString = currentString + s[i];
//         } else {
//             currentStrings.push(currentString);
//             let newCurrentString = '';

//             for (let j = currentString.length - 1; j >= 0; j--) {
//                 if (currentString[j] !== s[i]) {
//                     newCurrentString = currentString[j] + newCurrentString;
//                 } else {
//                     newCurrentString = newCurrentString + s[i];
//                     currentString = newCurrentString;
//                     break;
//                 };                
//             };            
//         };

//         if (i === s.length - 1 || currentStrings.length === 0) { currentStrings.push(currentString) };

//         console.log('i after: ' + i);
//         console.log('s[i]: ' + s[i]);
//         console.log('currentString: ' + currentString);
//         console.log('currentStrings: ' + currentStrings);
//         console.log('------------');
//     };

//     var maxSize = 0;

//     for (let i = 0; i < currentStrings.length; i++) {
//         if (currentStrings[i].length > maxSize) {
//             maxSize = currentStrings[i].length;
//         };
//     };

//     console.log(currentStrings);
//     console.log(maxSize);

//     return maxSize;
// };

var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    var currentString = '';
    var maxSize = 0;

    for (var i = 0; i < s.length; i++) {
        // console.log('currentString BEFORE: ' + currentString);

        currentString = currentString.includes(s[i]) ? currentString.slice(currentString.indexOf(s[i]) + 1) + s[i] : currentString = currentString + s[i];

        // if (!currentString.includes(s[i])) {
        //     currentString = currentString + s[i];
        // } else {
        //     currentString = currentString.slice(currentString.indexOf(s[i]) + 1) + s[i];
        // };

        if ((maxSize < currentString.length) || (i === s.length - 1 && maxSize === 0)) { maxSize = currentString.length };

        // console.log('i: ' + i);
        // console.log('s[i]: ' + s[i]);
        // console.log('currentString AFTER: ' + currentString);
        // console.log('maxSize: ' + maxSize);
        // console.log('------------');
    };

    return maxSize;
};


/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Not my solution but works faster

// var lengthOfLongestSubstring = function (s) {
//     let map = new Map();
//     let left = 0;
//     let ans = 0;

//     for (let right = 0; right < s.length; right++) {
//         let index = map.get(s[right]);        
//         // console.log('left BEFORE: ' + left);
//         if (index !== null && index >= left && index < right) {
//             left = index + 1;
//         };
//         // console.log('ans BEFORE: ' + ans);
//         // console.log('right - left + 1: ' + (right - left + 1));
//         ans = Math.max(ans, right - left + 1);
//         map.set(s[right], right);

//         // console.log('index: ' + index);
//         // console.log('right: ' + right);
//         // console.log('s[right]: ' + s[right]);        
//         // console.log('left AFTER: ' + left);
//         // console.log('ans AFTER: ' + ans);
//         // for (const entry of map.entries()) { console.log(entry) };
//         // console.log('------------');
//     };

//     return ans;
// };

// Not my solution but uses less memory

// var lengthOfLongestSubstring = function (s) {
//     let start = 0;
//     let maxLength = 0;
//     const set = new Set();

//     for (let end = 0; end < s.length; end++) {
//         // console.log('start BEFORE: ' + start);
//         // console.log('s[start] BEFORE: ' + s[start]);

//         while (set.has(s[end])) {
//             set.delete(s[start]);
//             start++;
//         };

//         set.add(s[end]);

//         // console.log('maxLength BEFORE: ' + maxLength);
//         //calculate length
//         maxLength = Math.max(maxLength, end - start + 1);

//         // console.log('end: ' + end);
//         // console.log('s[end]: ' + s[end]);
//         // console.log('start AFTER: ' + start);
//         // console.log('s[start] AFTER: ' + s[start]);
//         // console.log('end - start + 1: ' + (end - start + 1));
//         // console.log('maxLength AFTER: ' + maxLength);
//         // for (const value of set.values()) { console.log(value) };
//         // console.log('------------');
//     };

//     return maxLength;
// };


/*--------------------------------------------------------------------------------------------------------------------------------------------*/

console.log(lengthOfLongestSubstring('abcabcbb')); // 'abc' || 'bac' || 'cab' -> 3
console.log(lengthOfLongestSubstring('bbbbb')); // 'b' -> 1
console.log(lengthOfLongestSubstring('pwwkew')); // 'wke' -> 3
console.log(lengthOfLongestSubstring('au')); // 'au' -> 2
console.log(lengthOfLongestSubstring('axropfaujpkfgeqohbtvqpzekndgikpkjhyzmbvxqfdyjtnsvinnznujczrmlhwvqxweyr')); // 14
console.log(lengthOfLongestSubstring('wgvgblarjtolsgzdebatyzdksjncyocwwzczkctvyhgqqgwujynhxttpcgscuuyswdsgf')); // 12
console.log(lengthOfLongestSubstring('ivzptlpvooynyapgvswoaosaghrffnxnjyeeltzaizniccozwknwyhzgpqlwfkjqipuuj')); // 11
console.log(lengthOfLongestSubstring('aab')); // 'ab' -> 2
console.log(lengthOfLongestSubstring('abcbacbb')); // 'abc' || 'cba' || 'bac' || 'acb' -> 3 /// a abc cba bac acb b
console.log(lengthOfLongestSubstring('abcabcbb')); // 'abc' || 'bca' || 'cab' || 'bc' || 'cb' || 'b' -> 3
/*
Length of Last Word (#58)

Given a string "s" consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// My solution

var lengthOfLastWord = function (s) {
    var words = [];
    var currentWord = '';

    for (var i = 0; i < s.length; i++) {
        if (s[i] !== ' ' && i === s.length - 1) {
            currentWord = currentWord + s[i];
            words.push(currentWord);
        } else if (s[i] === ' ' && currentWord !== '') {
            words.push(currentWord);
            currentWord = '';
        } else if (s[i] !== ' ') {
            currentWord = currentWord + s[i];
        };
    };

    return words.at(-1).length;
};

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Not my solution but works faster

// var lengthOfLastWord = function (s) {
//     s = s.trim();
//     let words = s.split(' ');
//     return words[words.length - 1].length;
// };

// Not my solution but uses less memory

// var lengthOfLastWord = function (s) {
//     if (s.length === 0) { return 0 };
//     let len = 0;
//     s = s.trim();

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === ' ') { len = 0 } else { len++ };
//     };

//     return len;
// };


/*--------------------------------------------------------------------------------------------------------------------------------------------*/

console.log(lengthOfLastWord('Hello World')); // 5
console.log(lengthOfLastWord('   fly me   to   the moon  ')); // 4
console.log(lengthOfLastWord('luffy is still joyboy')); // 6
console.log(lengthOfLastWord(' still ')); // 5
console.log(lengthOfLastWord('fly ')); // 3
console.log(lengthOfLastWord(' World')); // 5
/*
Valid Parentheses (#20)

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1) Open brackets must be closed by the same type of brackets.
2) Open brackets must be closed in the correct order.
3) Every close bracket has a corresponding open bracket of the same type.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// My solution

var isValid = function (s) {
    let parenthesesOpen = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    let parenthesesClosed = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    let parenthesesOpenArray = [];

    for (let c of s) {
        if (parenthesesOpen[c]) {
            parenthesesOpenArray.push(c);
        } else {
            if (!parenthesesOpenArray.length || (parenthesesClosed[c] !== parenthesesOpenArray[parenthesesOpenArray.length - 1])) {
                return false;
            };

            parenthesesOpenArray.pop();
        };
    };

    return !parenthesesOpenArray.length;
};

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Not my solution but explained

// var isValid = function (s) {
//     let stack = []; // create an empty stack to store opening brackets

//     for (let c of s) { // loop through each character in the string
//         if (c === '(' || c === '{' || c === '[') { // if the character is an opening bracket
//             stack.push(c); // push it onto the stack
//         } else { // if the character is a closing bracket
//             if (!stack.length || // if the stack is empty or 
//                 (c === ')' && stack[stack.length - 1] !== '(') || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
//                 (c === '}' && stack[stack.length - 1] !== '{') ||
//                 (c === ']' && stack[stack.length - 1] !== '[')) {
//                 return false; // the string is not valid, so return false
//             };

//             stack.pop(); // otherwise, pop the opening bracket from the stack
//         };
//     };

//     return !stack.length; // if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
//     // so the string is valid, otherwise, there are unmatched opening brackets, so return false
// };

// Not my solution but faster

// var isValid = function (s) {
//     let stack = [];

//     for (let i = 0; i < s.length; i++) {
//         if (s.charAt(i) === '(' || s.charAt(i) === '{' || s.charAt(i) === '[') {
//             stack.push(s.charAt(i));
//         } else if (s.charAt(i) === ')' || s.charAt(i) === '}' || s.charAt(i) === ']') {
//             if (stack.length === 0) return false;

//             let pop_val = stack.pop();

//             if (s.charAt(i) === ')' && pop_val !== '(' ||
//                 s.charAt(i) === '}' && pop_val !== '{' ||
//                 s.charAt(i) === ']' && pop_val !== '[') {
//                 return false;
//             };
//         };
//     };

//     return stack.length === 0;
// };

// Not my solution but uses less memory

// var isValid = function (s) {
//     s = s.split('');

//     let i = 0;

//     while (i < s.length) {
//         console.log(s);
//         if (s[i] == '(' && s[i + 1] == ')') {
//             s.splice(i, 2);
//             i = 0;
//         } else if (s[i] == '[' && s[i + 1] == ']') {
//             s.splice(i, 2);
//             i = 0;
//         } else if (s[i] == '{' && s[i + 1] == '}') {
//             s.splice(i, 2);
//             i = 0;
//         } else {
//             i++;
//         };
//     };

//     if (s.length == 0) {
//         return true;
//     } else {
//         return false;
//     };
// };

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('((){[]})')); // true
console.log(isValid('[]]]')); // false
console.log(isValid('(){}}{')); // false
console.log(isValid('(}{)')); // false
console.log(isValid('[({])}')); // false
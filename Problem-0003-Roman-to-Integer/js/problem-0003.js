/*
Roman to Integer (#13)

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is 
written as XXVII, which is XX + V + II. Roman numerals are usually written largest to smallest from left to right. However, the numeral for 
four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle 
applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// My solution

var romanToInt = function (s) {
    let orders = [];

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'I':
                orders.push(1);
                break;

            case 'V':
                orders.push(5);
                break;

            case 'X':
                orders.push(10);
                break;

            case 'L':
                orders.push(50);
                break;

            case 'C':
                orders.push(100);
                break;

            case 'D':
                orders.push(500);
                break;

            case 'M':
                orders.push(1000);
                break;

            default:
                break;
        };
    };

    let result = 0;

    for (let i = orders.length - 1; i >= 0; i--) {
        if (i === 0) {
            result = result + orders[i];
            break;
        };

        if (orders[i] <= orders[i - 1]) {
            result = result + orders[i]; // 1 2
        } else {
            result = result + (orders[i] - orders[i - 1]);
            i--;
        };
    };

    return result;
};

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Not my solution but faster

// const algorism = new Map([
//     ['CM', 900],
//     ['CD', 400],
//     ['XC', 90],
//     ['XL', 40],
//     ['IX', 9],
//     ['IV', 4],
//     ['M', 1000],
//     ['D', 500],
//     ['C', 100],
//     ['L', 50],
//     ['X', 10],
//     ['V', 5],
//     ['I', 1],
// ]);

// function romanToInt(s) {
//     let acumulator = 0;

//     for (let i = 0; i < s.length; i++) {
//         const twoCharSymbol = s[i] + s[i + 1];
//         const oneCharSymbol = s[i];

//         if (algorism.has(twoCharSymbol)) {
//             acumulator += algorism.get(twoCharSymbol);
//             i++;
//         } else {
//             acumulator += algorism.get(oneCharSymbol);
//         }
//     }

//     return acumulator;
// };

// Not my solution but uses less memory

// var romanToInt = function (s) {
//     let RIMap = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     };

//     let output = 0;

//     for (let i = 0; i < s.length; i++) {
//         const cur = RIMap[s[i]];
//         const next = RIMap[s[i + 1]];

//         if (cur < next) {
//             output += next - cur;
//             i++;
//         } else {
//             output += cur;
//         };
//     };

//     return output;
// };

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

console.log(romanToInt('III')); // 3
console.log(romanToInt('LVIII')); // 58 
console.log(romanToInt('MCMXCIV')); // 1994
/*
Zigzag Conversion (#6)

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// My solution

var convert = function (s, numRows) {
    if (s === null || numRows <= 0) { return '' };
    if (numRows === 1) { return s };
    var maxSteps = numRows * 2 - 2; // how many steps we need to restart the process    
    var currentRow = 0;
    var currentSteps = 0;
    var isForward = true;
    var parts = Array(numRows).fill('');

    console.log('steps before restart the process: ' + maxSteps);
    console.log('   ');

    for (let i = 0; i < s.length; i++) {
        if (currentRow < numRows && isForward === true) {
            console.log('HERE 1');
            console.log('currentSteps BEFORE: ' + currentSteps);
            console.log('currentRow BEFORE: ' + currentRow);
            console.log('s[i]: ' + s[i]);

            parts[currentRow] = parts[currentRow] + s[i];
            currentRow++;
            currentSteps++;

            if (currentSteps === maxSteps) {
                console.log('HERE 2');
                currentRow = 0;
                currentSteps = 0;
            };

            console.log(parts);
            console.log('currentSteps AFTER: ' + currentSteps);
            console.log('currentRow AFTER: ' + currentRow);
            console.log('   ');
        } else {
            console.log('HERE 3');
            console.log('currentSteps BEFORE: ' + currentSteps);
            console.log('currentRow BEFORE: ' + currentRow);

            isForward = false;
            currentRow--;
            parts[currentRow - 1] = parts[currentRow - 1] + s[i];
            currentSteps++;

            console.log('currentSteps AFTER: ' + currentSteps);
            console.log('currentRow AFTER: ' + currentRow);
            console.log('currentRow - 1: ' + currentRow - 1);
            console.log('s[i]: ' + s[i]);
            console.log(parts);
            console.log('   ');

            if (currentSteps === maxSteps) {
                isForward = true;
                currentRow = 0;
                currentSteps = 0;

                console.log('HERE 4');
                console.log('currentSteps AFTER AGAIN: ' + currentSteps);
                console.log('currentRow AFTER AGAIN: ' + currentRow);
            };
        };
    };

    return parts.join('');
};

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Not my solution but works faster

// var convert = function (s, numRows) {
//     if (numRows == 1 || numRows >= s.length) {
//         return s;
//     };

//     let res = Array(numRows).fill('');
//     let index = 0, step = 1;

//     for (let char of s) {
//         res[index] += char;

//         if (index == 0) {
//             step = 1;
//         } else if (index == numRows - 1) {
//             step = -1;
//         };

//         index += step;
//     };

//     return res.join('');
// };

// Not my solution but uses less memory

// function convert(s, numRows) {
//     if (numRows === 1) return s;

//     const rows = new Array(numRows).fill().map(() => '');
//     let currentRow = 0;
//     let goingDown = false;

//     for (const char of s) {
//         rows[currentRow] += char;

//         if (currentRow === 0 || currentRow === numRows - 1) {
//             goingDown = !goingDown;
//         };

//         currentRow += goingDown ? 1 : -1;
//     };

//     return rows.join('');
// };

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

console.log(convert('PAYPALISHIRING', 3)); // 'PAHN APLSIIG YIR'
// console.log(convert('PAYPALISHIRING', 4)); // 'PIN ALSIG YAHR PI'
// console.log(convert('ABCD', 2)); // 'AC BD'

// P   A   H   N   0   4   8     12
// A P L S I I G   1 3 5 7 9  11 13
// Y   I   R       2   6   10


// P     I    N    0     6       12
// A   L S  I G    1   5 7    11 13
// Y A   H R       2 4   8 10
// P     I         3     9


// A C
// B D
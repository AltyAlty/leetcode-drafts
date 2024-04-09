/*
Add Binary (#67)

Given two binary strings "a" and "b", return their sum as a binary string.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// My solution

var addBinary = function (a, b) {
    // Should have used "BigInt" instead of "Number".
    // var sum = Number('0b' + a) + Number('0b' + b);
    // return sum.toString(2);

    if (a.length > b.length) {
        let loops = a.length - b.length;
        for (let i = 0; i < loops; i++) { b = '0' + b; };
    } else {
        let loops = b.length - a.length;
        for (let i = 0; i < loops; i++) { a = '0' + a; };
    };

    // console.log('a is ' + a);
    // console.log('b is ' + b);
    // console.log('--------------');

    let next = 0;
    let result = '';

    for (let i = a.length - 1; i >= 0; i--) {
        // console.log('i is ' + i);
        // console.log('a[i] is ' + a[i]);
        // console.log('b[i] is ' + b[i]);

        if (a[i] === '1' && b[i] === '1') {
            let currentOperation = 0 + next; // 0 or 1
            result = currentOperation + result;
            next = 1;
            if (i === 0) { result = '1' + result };
        } else if ((a[i] === '1' && b[i] === '0') || (a[i] === '0' && b[i] === '1')) {
            let currentOperation = 1 + next; // 1 or 2

            if (currentOperation === 1) {
                result = '1' + result;
                next = 0;
            } else if (currentOperation === 2) {
                result = '0' + result;
                next = 1;
                if (i === 0) { result = '1' + result };
            };
        } else if (a[i] === '0' && b[i] === '0') {
            let currentOperation = 0 + next; // 0 or 1
            result = currentOperation + result;
            next = 0;
        };

        // console.log('result is ' + result);
        // console.log('--------------');
    };

    if (a.length === 1) {
        return result;
    } else {
        for (let i = 0; i < result.length; i++) {
            if (result[i] === '0') {
                result = result.slice(i + 1);
                i--;
            } else {
                return result;
            };
        };
    };
};

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Not my solution but works faster

// var addBinary = function (a, b) {
//     let s1 = BigInt('0b' + a);
//     let s2 = BigInt('0b' + b);
//     return (s1 + s2).toString(2)
// };

// Not my solution but uses less memory

// var addBinary = function (a, b) {
//     return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
// };

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

console.log(addBinary('11', '1')); // 100
console.log(addBinary('1010', '1011')); // 10101
console.log(addBinary('0', '0')); // 0
console.log(addBinary('1', '111')); // 1000
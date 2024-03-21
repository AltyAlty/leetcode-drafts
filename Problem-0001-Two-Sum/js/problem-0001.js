/*
Two Sum (#1)

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// My solution

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - 1; j++) {
            if (i !== j && nums[i] + nums[j] === target) {
                return [i, j];
            };
        };
    };
};


/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Not my solution but faster
// var twoSum = function (nums, target) {
//     if (nums.length < 2) { return [] };

//     const obj = {};

//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i]; // 9 - 2 = 7 >>> 9 - 7 = 2 >>> 9 - 11 = -2 >>> 9 - 15 = -6

//         if (obj[complement] !== undefined) { // {} >>> {2: 0}
//             return [obj[complement], i]; // [0, 1]
//         };

//         obj[nums[i]] = i; // {2: 0} >>> {2: 0, 2: 0} >>> {2: 0, 2: 1, -2: 2} >>> {2: 0, 2: 1, -2: 2, -6: 3}
//     };

//     return [];
// };

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]

/*--------------------------------------------------------------------------------------------------------------------------------------------*/
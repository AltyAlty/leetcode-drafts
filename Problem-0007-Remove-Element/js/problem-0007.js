/*
Remove Element (#27)

Given an integer array "nums" and an integer "val", remove all occurrences of "val" in "nums" in-place. The order of the elements may be 
changed. Then return the number of elements in "nums" which are not equal to "val".
Consider the number of elements in "nums" which are not equal to "val" be "k", to get accepted, you need to do the following things:
1) Change the array "nums" such that the first "k" elements of nums contain the elements which are not equal to "val". The remaining 
elements of "nums" are not important as well as the size of "nums".
2) Return k.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// My solution

var removeElement = function (nums, val) {
    while (nums.includes(val)) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === val) {
                if (i === 0) {
                    nums.shift();
                    i--;
                } else if (i === nums.length - 1) {
                    nums.pop();
                } else {
                    let temp = nums[i];
                    nums[i] = nums[i + 1];
                    nums[i + 1] = temp;
                };
            };
        };
    };

    console.log(nums);
    return nums.length;
};

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Not my solution but works faster and uses less memory

// var removeElement = function (nums, val) {
//     let k = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//             nums[k] = nums[i];
//             k++;
//         };
//     };

//     return k;
// };

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
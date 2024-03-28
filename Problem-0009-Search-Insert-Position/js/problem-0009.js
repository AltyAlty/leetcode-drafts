/*
Search Insert Position (#35)

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would 
be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// My solution

var searchInsert = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;

    /*Используем бинарный поиск.*/
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        };
    };    

    return start;
};

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Not my solution but works faster

// var searchInsert = function (nums, target) {
//     const firstIndex = nums.indexOf(target);
//     let index;

//     if (firstIndex == -1) {
//         for (let i = 0; i < nums.length; i++) { // если target меньше одного из чисел.
//             if (nums[i] > target) {
//                 nums.push(nums[i], target); // useless
//                 return i;
//             };
//         };

//         return nums?.length; // // если target больше каждого из чисел.
//     } else {
//         index = firstIndex;
//     };

//     return index;
// };

// Not my solution but uses less memory

// var searchInsert = function(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         if (nums[mid] === target) {
//             return mid;
//         } else if (nums[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return left;
// };

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
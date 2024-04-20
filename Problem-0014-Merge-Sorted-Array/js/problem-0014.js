/*
Merge Sorted Array (#88)

You are given two integer arrays "nums1" and "nums2", sorted in non-decreasing order, and two integers "m" and "n", representing the number of 
elements in nums1 and nums2 respectively.
Merge "nums1" and "nums2" into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array "nums1". To accommodate this, "nums1" has 
a length of "m + n", where the first "m" elements denote the elements that should be merged, and the last "n" elements are set to 0 and should 
be ignored. "nums2" has a length of "n".
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// My solution (terrible and lazy)

var merge = function (nums1, m, nums2, n) {
    var originalNums1Length = nums1.length;
    for (let i = 0; i < originalNums1Length - m; i++) { nums1.pop() };

    var newNums1 = [].concat(nums1, nums2);
    newNums1.sort((a, b) => a - b);

    for (let i = 0; i < originalNums1Length; i++) { nums1.pop() };
    for (let i = 0; i < newNums1.length; i++) { nums1.push(newNums1[i]) };

    return nums1;
};

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Not my solution but works faster

// function merge(nums1, m, nums2, n) {
//     for (var i = 0; i < n; nums1[i + m] = nums2[i++]);
//     nums1.sort(numSortCallback);
// };

// const numSortCallback = (a, b) => a - b;

// Not my solution but uses less memory

// var merge = function (nums1, m, nums2, n) {
//     //check if m is greater than nums1.length

//     if (m + n >= nums1.length) {
//         for (let i = 0, j = m; i < n; i++, j++) { // n is the number of elements to be added
//             nums1[j] = nums2[i];
//         };
//     };

//     nums1.sort((a, b) => a - b);
// };

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); // [1]
console.log(merge([0], 0, [1], 1)); // [1]
console.log(merge([2, 0], 1, [1], 1)); // [1, 2]
console.log(merge([-1, -1, 0, 0, 0, 0], 4, [-1, 0], 2)); // [-1,-1,-1,0,0,0]
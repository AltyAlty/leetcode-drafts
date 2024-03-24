/*
Remove Duplicates from Sorted Array (#26)

Given an integer array "nums" sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same. Then return the number of unique elements in "nums".

Consider the number of unique elements of "nums" to be "k", to get accepted, you need to do the following things:
1) Change the array "nums" such that the first "k" elements of nums contain the unique elements in the order they were present in "nums" 
initially. The remaining elements of "nums" are not important as well as the size of "nums".
2) Return "k".
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// My solution, but very slow for really big arrays

var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let arrayCopy = nums.slice(i + 1);
        // console.log('nums before: ');
        // console.log(nums);
        // console.log('i: ' + i);
        // console.log('nums[i]: ' + nums[i]);
        // console.log('arrayCopy: ');
        // console.log(arrayCopy);        

        for (let j = 0; j < arrayCopy.length; j++) {
            if (nums[i] === arrayCopy[j]) {
                let savedElements = []
                for (let h = 0; h < i; h++) { savedElements.unshift(nums.shift()) };

                // console.log('savedElements: ');
                // console.log(savedElements);

                nums.shift();
                // console.log('nums in the middle: ');
                // console.log(nums);

                for (let m = 0; m < savedElements.length; m++) {
                    nums.unshift(savedElements.shift());
                    m--;
                };

                i--;
                // console.log('nums after: ');
                // console.log(nums);
                // console.log('   ');
            } else {
                // console.log('not doing anything');
                // console.log('   ');
            };
        };
    };

    // console.log('RESULT: ');
    console.log(nums);
    return nums.length;
};

// My solution, but based on another solution

// var removeDuplicates = function (nums) {
//     let uniqueElements = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (i < nums.length - 1 && nums[i] == nums[i + 1]) { continue };
//         nums[uniqueElements] = nums[i];
//         uniqueElements++;
//     };

//     let tempLength = nums.length;
//     for (let j = 0; j < tempLength - uniqueElements; j++) { nums.pop() };
//     console.log(nums);
//     return uniqueElements;
// };

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Not my solution but explained

// function removeDuplicates(nums) {
//     if (nums.length === 0) { return 0 };

//     let k = 1; // Initialize the count of unique elements to 1

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[k - 1]) { // 1 - 1 = 0
//             nums[k] = nums[i]; // Overwrite the next unique element
//             k++;
//         };

//         console.log('nums before: ' + nums);
//         console.log('i: ' + i);
//         console.log('k: ' + k);
//         console.log('k - 1: ' + (k - 1));
//         console.log('nums[i]: ' + nums[i]);
//         console.log('nums[k - 1]: ' + nums[k - 1]);
//         console.log('nums after: ' + nums);
//         console.log(' ');
//     };

//     console.log(nums.length);
//     return k;
// };

// Not my solution but faster

// var removeDuplicates = function(nums) {
//     // Length of the updated array
//     let count = 0;

//     // Loop for all the elements in the array
//     for (let i = 0; i < nums.length; i++) {
//         // If the current element is equal to the next element, we skip
//         if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
//             continue;
//         };

//         // We will update the array in place
//         nums[count] = nums[i];
//         count++;
//     };

//     return count;
// };

// Not my solution but uses less memory

// var removeDuplicates = function (nums) {
//     var i = 0;

//     for (var j = 1; j < nums.length; j++) {
//         if (nums[j] !== nums[i]) {
//             nums[++i] = nums[j];
//             // i++;
//         };
//     };

//     return i + 1;
// };

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

console.log(removeDuplicates([1, 1, 1]));
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([0, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([0, 1, 2, 2, 3, 3, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 3]));
console.log(removeDuplicates([1, 1, 2, 3]));
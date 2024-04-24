/*
Median of Two Sorted Arrays (#4)

Given two sorted arrays "nums1" and "nums2" of size "m" and "n" respectively, return the median of the two sorted arrays.
The overall run time complexity should be "O(log (m+n))".
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// My solution

var findMedianSortedArrays = function (nums1, nums2) {
    var sortedArray = [].concat(nums1, nums2).sort((a, b) => a - b);

    if (sortedArray.length % 2 !== 0) {
        return sortedArray[sortedArray.length - Math.floor(sortedArray.length / 2) - 1];
    } else {
        return (sortedArray[sortedArray.length - sortedArray.length / 2] + sortedArray[sortedArray.length - sortedArray.length / 2 - 1]) / 2;
    };
};

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Not my solution but works faster

// var findMedianSortedArrays = function (nums1, nums2) {
//     const array = [];

//     for (let j = i = 0; i < nums1.length || j < nums2.length;) {
//         // console.log('i: ' + i);
//         // console.log('nums1[i]: ' + nums1[i]);
//         // console.log('j: ' + j);
//         // console.log('nums2[j]: ' + nums2[j]);

//         if (nums1[i] !== undefined && (nums2[j] === undefined || nums1[i] <= nums2[j])) array.push(nums1[i++])
//         else array.push(nums2[j++]);

//         // console.log('i++: ' + i);
//         // console.log('nums1[i++]: ' + nums1[i]);
//         // console.log('j++: ' + j);
//         // console.log('nums2[j++]: ' + nums2[j]);
//         // console.log(array);
//         // console.log('---------');
//     }

//     const half = array.length / 2;
//     // console.log('half: ' + half);
//     const isOdd = array.length % 2;
//     // console.log('isOdd: ' + isOdd);
//     if (isOdd) return array[Math.floor(half)]
//     else return (array[half] + array[half - 1]) / 2
// };

// Not my solution but uses less memory

// function findMedianSortedArrays(nums1, nums2) {
//     const merged = mergeSortedArrays(nums1, nums2);
//     const totalLength = merged.length;

//     if (totalLength % 2 === 0) {
//         const midRight = totalLength / 2;
//         const midLeft = midRight - 1;
//         return (merged[midLeft] + merged[midRight]) / 2;
//     } else {
//         const midIndex = Math.floor(totalLength / 2);
//         return merged[midIndex];
//     }
// }

// function mergeSortedArrays(nums1, nums2) {
//     const merged = [];
//     let i = 0, j = 0;

//     while (i < nums1.length && j < nums2.length) {
//         if (nums1[i] < nums2[j]) {
//             merged.push(nums1[i]);
//             i++;
//         } else {
//             merged.push(nums2[j]);
//             j++;
//         }
//     }

//     while (i < nums1.length) {
//         merged.push(nums1[i]);
//         i++;
//     }

//     while (j < nums2.length) {
//         merged.push(nums2[j]);
//         j++;
//     }

//     return merged;
// }


/*--------------------------------------------------------------------------------------------------------------------------------------------*/

console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
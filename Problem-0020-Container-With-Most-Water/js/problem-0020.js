/*
Container With Most Water (#11)

You are given an integer array "height" of length "n". There are "n" vertical lines drawn such that the two endpoints of the "ith" line are 
"(i, 0)" and "(i, height[i])". Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store. Notice that you may not slant the container.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// My solution

// var maxArea = function (height) {
//     var result = 0;

//     for (let i = 0; i < height.length; i++) {
//         for (let j = i + 1; j < height.length; j++) {
//             result = Math.max(result, (j - i) * Math.min(height[i], height[j]));
//         };
//     };

//     return result;
// };

var maxArea = function (height) {
    var result = 0;
    var leftEnd = 0;
    var rightEnd = height.length - 1;

    for (let i = 0; i < height.length; i++) {
        result = Math.max(result, (rightEnd - leftEnd) * Math.min(height[leftEnd], height[rightEnd]));

        if (height[leftEnd] < height[rightEnd]) {
            leftEnd++;
        } else {
            rightEnd--;
        };
    };

    return result;
};

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Not my solution but works faster

// var maxArea = function (height) {
//     let maxArea = 0;
//     let left = 0;
//     let right = height.length - 1;

//     while (left < right) {
//         maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left));
//         height[left] <= height[right] ? left++ : right--;
//     };

//     return maxArea;
// };

// Not my solution but uses less memory

// const maxArea = (heights) => {
//     let maximumArea = 0;
//     let left = 0;
//     let right = heights.length - 1;

//     while (left < right) {
//         let leftVal = heights[left];
//         let rightVal = heights[right];
//         let area = Math.min(leftVal, rightVal) * (right - left);

//         maximumArea = Math.max(area, maximumArea);
//         leftVal < rightVal ? left++ : right--;
//     };

//     return maximumArea;
// };

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([2, 3, 10, 5, 7, 8, 9])); // 36
console.log(maxArea([1, 1])); // 1
'use strict';
/* 
The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum.

For instance:

getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (take all)

If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

getMaxSubSum([-1, -2, -3]) = 0

Please try to think of a fast solution: O(n2) or even O(n) if you can.
*/

let arr = [1, -2, 3, 4, -9, 6];

function getMaxSubSum(array = []) {
    let sum = 0;
    let allNegative = true;

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            allNegative = false;
            break;
        }
    }

    if (allNegative) {
        sum = 0;
        return sum;
    }

    for (let elem of array) {
        sum += elem;
    }

    return sum;
}

console.log(getMaxSubSum(arr));
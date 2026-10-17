/**
 * @title Rotate Array - 189
 * @difficulty Medium
 * @link https://leetcode.com/problems/rotate-array/
 * @description Given an array, rotate the array to the right by k steps, where k is non-negative.
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */


// const reverse = (arr) => {
const reverse = (arr, start, end) => {
  while (start < end) {
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--
  }
}


const rotate = function (nums, k) {
  const n = nums.length

  k %= nums.length

  reverse(nums, 0, n - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, n - 1)

  console.log(nums)
}

rotate([1, 2, 3, 4, 5, 6, 7], 3)
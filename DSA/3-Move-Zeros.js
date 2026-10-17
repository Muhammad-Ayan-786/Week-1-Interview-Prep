/**
 * @title Move Zeros - 283
 * @difficulty Easy
 * @link https://leetcode.com/problems/move-zeroes/
 * @description Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array.
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


function moveZeroes(nums) {
  let left = 0

  for (let right = 0; right < nums.length; right++) {

    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
    }

  }

  console.log(nums)
}


moveZeroes([0, 1, 0, 3, 12])
moveZeroes([0])
moveZeroes([0, 0, 1])
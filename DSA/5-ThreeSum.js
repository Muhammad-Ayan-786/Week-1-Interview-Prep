/**
 * @title Three Sum - LC 15
 * @difficulty Medium
 * @link https://leetcode.com/problems/3sum/description/
 * @description Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 * @param {number[]} nums
 * @return {number[][]}
*/


const threeSum = function (nums) {

  let arr = []
  let n = nums.length
  nums.sort((a, b) => a - b)

  for (let i = 0; i < n; i++) {
    let j = i + 1, k = n - 1

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if (sum < 0) j++;
      else if (sum > 0) k--;
      else {
        arr.push([nums[i], nums[j], nums[k]])
        j++;
        k--;
      }
    }
  }

  return nums
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  return i === nums.length ? 1 : nums[i] * product(nums, i + 1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, longestSoFar = 0) {
  if (i === words.length) return longestSoFar;
  if (words[i].length > longestSoFar) {
    longestSoFar = words[i].length;
  }
  return longest(words, i + 1, longestSoFar)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, outputStr = "") {
  if (i >= str.length) return outputStr
  outputStr += str[i]
  return everyOther(str, i + 2, outputStr)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, left = 0, right = str.length - 1) {
 if (str[left] !== str[right]) return false;
 if (left >= right) return true;
 return isPalindrome(str, left + 1, right - 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (arr[i] === val) return i
  if (i > arr.length) return -1
  return findIndex(arr, val, i + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1, outputStr = "") {
  if (i < 0) return outputStr
  console.log("i is: ", i)
  console.log('str[i]: ', str[i])
  return revString(str, i - 1, outputStr+= str[i])
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, outputArray = []) {
  let values = Object.values(obj)
  for (let v of values) {
    if (typeof v === "string") outputArray.push(v)
    if (typeof v === "object") gatherStrings(v, outputArray)
  }
  return outputArray
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) return -1
  let middle = Math.floor((right + left) / 2);

  if (arr[middle] === val) return middle
  return arr[middle] > val ? binarySearch(arr, val, left, middle - 1) : binarySearch(arr, val, middle + 1, right)

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};

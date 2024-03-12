/** product: calculate the product of an array of numbers. */

function product(nums) {

  if (nums.length === 0) return 1; //Base Case
  return nums[0] * product(nums.slice(1)); // recursive step

}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
 
  if (words.length === 1) return words[0].length; //base case
  return Math.max(words[0].length, longest(words.slice(1))); //recursive step

}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0) {

  if (idx >= str.length) return ""; //base case
  return str[idx] + everyOther(str, idx + 2); //recursive step

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

  if (str.length <= 1) return true; //base case
  if (str[0] !== str[str.length - 1]) return false //check first and last character
  return isPalindrome(str.substing(1, str.length - 1)); //recursive step

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {

  if (arr.length === 0 || idx >= arr.length) return -1; //base case
  if(arr[idx] === val) return idx; //found match
  return findIndex(arr, val, idx + 1) //recursive step

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

  if(str === "") return ""; //base case
  return revString(str.substr(1)) + str.charAt(0) //recursive step

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

  let strings = [];
  for (let key in obj) {
    if(typeof obj[key] === 'string') {
      strings.push(obj[key]);
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      strings = strings.concat(gatherStrings(obj[key])); //recursive step
    }
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {

  if (left > right) return -1; //base case
  let mid = Math.fllor((left + right) / 2);
  if (arr[mid] === 0) return mid; //found value
  if(arr[mid] < val) return binarySearch(arr, val, mid + 1, right); //search right
  return binarySearch(arr, val, left, mid - 1); //search left

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

// example
function maxSubarraySum(arr: number[], num: number) {
  if (arr.length < num) return null;

  let maxSum: number = 0;

  // compute the first window of the given size (num)
  let windowSum: number = 0;
  for (let i = 0; i < num; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  for (let i = num; i < arr.length; i++) {
    windowSum = windowSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

// let fn = maxSubarraySum([2, 3], 3);
// console.log(fn);

function minSubArrayLen(arr: number[], sum: number) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

let fn = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55);
console.log(fn);
console.log(16 + 22 + 5 + 7 + 8);

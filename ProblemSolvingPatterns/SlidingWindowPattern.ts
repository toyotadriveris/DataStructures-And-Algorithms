// example
function maxSubarraySum(arr: number[], num: number) {
  if (arr.length < num) return null;

  let maxSum: number = 0;
  let tempSum: number = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

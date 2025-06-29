// example
function sumZero(arr: number[]) {
  let left: number = 0;
  let right: number = arr.length - 1;

  while (left < right) {
    let sum: number = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));

// exercise
function countUniqueValues(arr: number[]) {
  if (arr.length === 0) return 0;
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      j += 1;
      arr[j] = arr[i];
    }
  }
  return j + 1;
}

console.log(countUniqueValues([]));

function areThereDuplicates(): boolean {
  let arr = Array.from(arguments);
  if (arr.length === 0 || arr.length === 1) return false;
  let temp = {};

  let left: number = 0;
  let right: number = arr.length - 1;

  while (left < right) {
    console.log(arr[left]);
    console.log(arr[right]);

    if (arr.length === 3 && !(arr[left] in temp)) {
      temp[arr[left]] = arr[left];
      left += 1;
    } else {
      return true;
    }

    if (arr[left] !== arr[right] && !(arr[right] in temp)) {
      temp[arr[left]] = arr[left];
      temp[arr[right]] = arr[right];

      left += 1;
      right -= 1;
    } else {
      return true;
    }
    console.log(temp);
  }

  console.log(temp);
  return false;
}

// console.log(areThereDuplicates(1, 2, 2));
function averagePair(arr: number[], avg: number): boolean {
  if (!arr || arr.length === 0) return false;

  let condition = avg * 2;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] === condition) {
      return true;
    } else if (arr[left] + arr[right] > condition) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

function isSubsequence(str1: string, str2: string): boolean {
  let result = 0;
  let j = 0;
  for (let i = 0; i < str2.length; i++) {
    if (result >= 2) return true;
    // console.log(str1[i]);
    // console.log(str2[j]);

    if (str2[i] === str1[j]) {
      result += 1;
      j += 1;
    }
    // console.log(result);
  }
  return false;
}
// console.log(isSubsequence("abc", "acb"));
function findPair(arr: number[], target: number): boolean {
  if (!arr || arr.length === 0) return false;

  // if (target < 0) target * -1;
  arr.sort((a, b) => a - b);
  console.log(arr);
  let left = 0;
  let right = arr.length - 1;

  while (left < arr.length) {
    let sum = arr[left] - arr[right];

    console.log(sum);
    if (sum === target || sum === target * -1) return true;
    if (sum > target && arr[left] > arr[right]) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1));

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

console.log(areThereDuplicates(1, 2, 2));

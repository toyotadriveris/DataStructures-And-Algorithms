function CollectOddsPure(nums: number[]) {
  let newArr: number[] = [];

  if (nums.length === 0) return newArr;

  if (nums[0] % 2 !== 0) newArr.push(nums[0]);

  newArr = newArr.concat(CollectOddsPure(nums.slice(1)));
  return newArr;
}

console.log(CollectOddsPure([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

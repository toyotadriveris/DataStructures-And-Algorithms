function productOfArray(arr: number[]): number {
  let prev: number = 1;
  if (arr.length === 0) return prev;

  prev *= arr[0];
  return (prev *= productOfArray(arr.slice(1)));
}
console.log(productOfArray([1, 2, 3, 10]));

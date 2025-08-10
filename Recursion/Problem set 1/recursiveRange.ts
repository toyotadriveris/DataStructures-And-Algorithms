function recursiveRange(num: number): number {
  let total = 0;
  if (num === 0) return total;
  total += num;
  return (total += recursiveRange(num - 1));
}

console.log(recursiveRange(6));

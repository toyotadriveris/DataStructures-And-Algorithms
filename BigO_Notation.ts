console.log("hey");

function addUpTo(n: number): number {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpTo2(n: number): number {
  return (n * (n + 1)) / 2;
}
var t1 = performance.now();
console.log(addUpTo2(10000000));
var t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);

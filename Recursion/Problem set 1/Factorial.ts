function Factorial(num: number): number {
  if (num === 0) return 1;

  return (num *= Factorial(num - 1));
}

console.log(Factorial(7));

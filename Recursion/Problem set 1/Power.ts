function Power(num: number, pwr: number): number {
  if (pwr === 0) return 1;
  if (pwr < 0) return 1;
  return (num *= Power(num, pwr - 1));
}

console.log(Power(8, 2));

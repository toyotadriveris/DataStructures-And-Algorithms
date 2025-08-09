function collectOdds(nums: number[]): number[] {
  let res: number[] = [];

  function helper(helperInput: number[]) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) res.push(helperInput[0]);

    helper(helperInput.slice(1));
  }

  helper(nums);

  return res;
}

collectOdds([1, 2, 3, 4, 5]);

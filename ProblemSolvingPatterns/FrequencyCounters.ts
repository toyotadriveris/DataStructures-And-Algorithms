// example
function same(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1: Record<number, number> = {};
  let frequencyCounter2: Record<number, number> = {};

  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (!(Number(key) ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter2[Number(key) ** 2] !== frequencyCounter1[Number(key)])
      return false;
  }

  return true;
}
// console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

// exercise
function validAnagram(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;

  let frequencyCounter1: Record<string, number> = {};
  let frequencyCounter2: Record<string, number> = {};

  for (const val of word1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (const val of word2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }

  return true;
}

// instructor solution
function validAnagramInst(first: string, second: string): boolean {
  if (first.length !== second.length) return false;

  const lookup: Record<string, number> = {};

  for (let i = 0; i < first.length; i++) {
    const letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    const letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

// console.log(validAnagramInst("anagram", "nagaram"));

// exercise 1

function sameFrequency(int1: number, int2: number): boolean {
  if (int1.toString().length !== int1.toString().length) return false;

  let firstInt: Record<number, number> = {};
  let secondInt: Record<number, number> = {};

  for (const val of int1.toString()) {
    firstInt[Number(val)] = (firstInt[Number(val)] || 0) + 1;
  }

  for (const val of int2.toString()) {
    secondInt[Number(val)] = (secondInt[Number(val)] || 0) + 1;
  }

  // console.log(firstInt);
  // console.log(secondInt);

  for (const key in firstInt) {
    if (!(key in secondInt)) return false;

    if (firstInt[key] !== secondInt[key]) return false;
  }

  return true;
}

// console.log(sameFrequency(3589578, 3589578));

// exercise 2
function constructNote(msg: string, letters: string): boolean {
  if (letters.length < msg.length) return false;

  let msgFreq: Record<string, number> = {};
  let lettersFreq: Record<string, number> = {};

  for (const val of msg) {
    msgFreq[val] = (msgFreq[val] || 0) + 1;
  }

  for (const val of letters) {
    lettersFreq[val] = (lettersFreq[val] || 0) + 1;
  }

  console.log(msgFreq);
  console.log(lettersFreq);
  for (const key in msgFreq) {
    if (!(key in lettersFreq)) return false;

    if (lettersFreq[key] < msgFreq[key]) return false;
  }

  return true;
}

// console.log(constructNote("aa", "abc"));

function findAllDuplicates(arr: number[]) {
  let temp = new Set();
  let ans: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (temp.has(arr[i])) {
      ans.push(arr[i]);
    } else {
      temp.add(arr[i]);
    }
  }

  return ans;
}

console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]));

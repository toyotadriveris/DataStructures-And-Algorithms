# Solve the problem

If you can't..

## Solve a simpler problem!

---

## **Simplify**

- Fine the core difficulty in what you're trying to do.

- Temporarily ignore that difficulty.

- Write a simplified solution.

- Then incorporate that difficulty back in.

function charCount(str: string) {
// make object to return at the end

var result = {};

---

// loop over the string, for each character...

for(var i = 0; i < str.length; i++) {
var char = str[i].toLowerCase()

// if the char is a number/letter AND is a key in object , add one to count

if(result[char] > 0 ) {
result[char]++;
}

if the char is a number/letter AND not in object, add it and set its value to 1

else {
result[char] = 1;
}
}

---

if the char is something else (space, period, etc...) ignore it

---

// return object in the end
return result;
}

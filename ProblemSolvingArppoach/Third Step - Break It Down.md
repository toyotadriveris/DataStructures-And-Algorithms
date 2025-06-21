## **Explicitly write out the steps you need to take.**

What are the steps that should happen inside our function?

#### example

function charCount(str: string) {
// do something
// return an object with keys that are lower case alphanumeric characters in the string; values should be the counts for the chars in the string
}

function charCount(str: string) {
// make object to return at the end
// loop over the string, for each character...

if the char is a number/letter AND is a key in object , add one to count
if the char is a number/letter AND not in object, add it and set its value to 1
if the char is something else (space, period, etc...) ignore it

---

// return object in the end
}

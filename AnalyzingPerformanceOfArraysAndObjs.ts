let instructor = {
  firstName: "kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};
console.log(Object.values(instructor));

// Insertion at the first on an array is not the most efficient
// Insertion at the end is fine

// Removal at the end of an array is fine
// Removal at the first of an array isn't the most efficient

// in the middle both of them are bad as well.

// Accessing anywhere in the array is fine

// Searching through an array is linear o(n)

// the sort method is kinda bad

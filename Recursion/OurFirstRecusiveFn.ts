function countDown(num: number) {
  // base case
  if (num <= 0) return console.log("all done");

  console.log(num);
  num--;
  countDown(num);
}

countDown(20);

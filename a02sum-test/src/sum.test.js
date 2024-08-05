import sum from "./sum";

// test("add 1 + 2 to equal 3", () => {
//   expect(sum(1, 3)).toBe(4);
// });

// Improved one

test("Sum of two number", () => {
  let a = 10;
  let b = 20;
  let sumVal = a + b;
  expect(sum(a, b)).toBe(sumVal);
});

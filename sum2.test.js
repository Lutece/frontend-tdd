const sum = require("./sum2");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(4, 5)).toBe(9);
});

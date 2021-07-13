const MinDeciBinaryPartitions = require("../src/1689-partitioning-into-minimum-number-of-deci-binary-numbers");

test("given a single digit number, should return the minimum number of deci-binary partitions accordingly", () => {
  expect(new MinDeciBinaryPartitions().minPartitions("4")).toBe(4);
});

test("given a two-digit number, should return the minimum number of deci-binary partitions accordingly", () => {
  expect(new MinDeciBinaryPartitions().minPartitions("32")).toBe(3);
});

test("given a five-digit number, should return the minimum number of deci-binary partitions accordingly", () => {
  expect(new MinDeciBinaryPartitions().minPartitions("82734")).toBe(8);
});

test("given a five-digit number, should return the minimum number of deci-binary partitions accordingly", () => {
  expect(
    new MinDeciBinaryPartitions().minPartitions(
      "21119191991919199119919119911919991119191919199"
    )
  ).toBe(9);
});

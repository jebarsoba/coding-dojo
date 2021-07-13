const JewelsAndStones = require("../src/771-jewels-and-stones");

test("should return how many stones are also jewels", () => {
  const jewels = "aA";
  const stones = "aAAbbbb";

  expect(new JewelsAndStones().numJewelsInStones(jewels, stones)).toBe(3);
});

test("should return how many stones are also jewels (another example)", () => {
  const jewels = "z";
  const stones = "ZZ";

  expect(new JewelsAndStones().numJewelsInStones(jewels, stones)).toBe(0);
});

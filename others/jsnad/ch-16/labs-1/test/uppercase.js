const { test } = require("tap");
const uppercase = require("../uppercase");

test("given not a string, should throw", async ({ throws }) => {
  throws(() => uppercase(1), Error("input must be a string"));
});

test("given a lowercase string, should make it uppercase", async ({
  equal,
}) => {
  equal(uppercase("hi"), "HI");
});

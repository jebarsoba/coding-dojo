"use strict";
const store = require("./store");
global.setTimeout = require("timers").setTimeout;

test("given not a buffer, should err", async () => {
  await expect(store(1)).rejects.toStrictEqual(Error("input must be a buffer"));
});

test("given a buffer, should return a valid id", async () => {
  const val = await store(Buffer.from("👀"));
  expect(val.id).toHaveLength(4);
});

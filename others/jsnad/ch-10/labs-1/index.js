"use strict";
const assert = require("assert");

function parseUrl(str) {
  let parsed = null;
  try {
    parsed = new URL(str);
  } catch (err) {
    return null;
  }
  return parsed;
}

assert.doesNotThrow(() => {
  parseUrl("invalid-url");
});
assert.equal(parseUrl("invalid-url"), null);
assert.deepEqual(parseUrl("http://example.com"), new URL("http://example.com"));
console.log("passed!");

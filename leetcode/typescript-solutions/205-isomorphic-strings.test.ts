test("given two strings s and t, should determine if they are isomorphic (Example 1)", () => {
  expect(isIsomorphic("egg", "add")).toBe(true);
});

test("given two strings s and t, should determine if they are isomorphic (Example 2)", () => {
  expect(isIsomorphic("foo", "bar")).toBe(false);
});

test("given two strings s and t, should determine if they are isomorphic (Example 3)", () => {
  expect(isIsomorphic("paper", "title")).toBe(true);
});

test("given two strings s and t, should determine if they are isomorphic (Example 3)", () => {
  expect(isIsomorphic("badc", "baba")).toBe(false);
});

function isIsomorphic(s: string, t: string): boolean {
  let sArr = s.split("");
  let tArr = t.split("");

  let charMap = new Map<string, string>();
  let mappedCharacters = new Map<string, boolean>();

  for (let i = 0; i < sArr.length; i++) {
    let mappedChar = charMap.get(sArr[i]);
    if (mappedChar && mappedChar !== tArr[i]) {
      return false;
    }

    if (!mappedChar) {
      // No two characters may map to the same character...
      if (mappedCharacters.get(tArr[i])) {
        return false;
      }

      charMap.set(sArr[i], tArr[i]);
      mappedCharacters.set(tArr[i], true);
    }
  }

  return true;
}

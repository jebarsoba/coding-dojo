test("given two strings s and t, should return true if t is an anagram of s, and false otherwise (Example 1)", () => {
  expect(isAnagram("anagram", "nagaram")).toBe(true);
});

test("given two strings s and t, should return true if t is an anagram of s, and false otherwise (Example 2)", () => {
  expect(isAnagram("rat", "car")).toBe(false);
});

function isAnagram(s: string, t: string): boolean {
  let sArr = s.split("");
  let tArr = t.split("");
  if (sArr.length !== tArr.length) {
    return false;
  }

  let lettersMap = new Map<string, number>();
  for (let i = 0; i < sArr.length; i++) {
    let sCurrent = lettersMap.get(sArr[i]) ? lettersMap.get(sArr[i]) : 0;
    lettersMap.set(sArr[i], ++sCurrent);

    let tCurrent = lettersMap.get(tArr[i]) ? lettersMap.get(tArr[i]) : 0;
    lettersMap.set(tArr[i], --tCurrent);
  }

  for (let letter of lettersMap.values()) {
    if (letter !== 0) {
      return false;
    }
  }

  return true;
}

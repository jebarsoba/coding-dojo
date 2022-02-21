/**
 * You are given an array of strings words and a string chars.
 *
 * A string is good if it can be formed by characters from chars (each character can only be used once).
 *
 * Return the sum of lengths of all good strings in words.
 */

test("Example 1", () => {
  expect(
    countCharacters(
      [
        "dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin",
        "ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb",
        "ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl",
        "boygirdlggnh",
        "xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx",
        "nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop",
        "hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx",
        "juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr",
        "lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo",
        "oxgaskztzroxuntiwlfyufddl",
        "tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp",
        "qnagrpfzlyrouolqquytwnwnsqnmuzphne",
        "eeilfdaookieawrrbvtnqfzcricvhpiv",
        "sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz",
        "yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue",
        "hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv",
        "cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo",
        "teyygdmmyadppuopvqdodaczob",
        "qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs",
        "qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs",
      ],
      "usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp"
    )
  ).toBe(0);
});

test("Example 2", () => {
  expect(
    countCharacters(["hello", "world", "leetcode"], "welldonehoneyr")
  ).toBe(10);
});

function countCharacters(words: string[], chars: string): number {
  let charMap: Map<string, number> = new Map<string, number>();
  for (let char of chars.split("")) {
    let occurr: number = charMap.get(char);
    occurr = occurr ? ++occurr : 1;
    charMap.set(char, occurr);
  }

  let sum = 0;
  for (let word of words) {
    let good = true;
    let usedCharsMap: Map<string, number> = new Map<string, number>();
    for (let char of word.split("")) {
      let currChars: number = charMap.get(char);
      let currUsed: number = usedCharsMap.get(char);
      if (currChars && (!currUsed || currUsed < currChars)) {
        usedCharsMap.set(char, currUsed ? ++currUsed : 1);
      } else {
        good = false;
        break;
      }
    }

    if (good) {
      sum += word.length;
    }
  }
  return sum;
}

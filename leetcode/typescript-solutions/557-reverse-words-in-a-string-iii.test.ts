test("given the root of a binary tree, should invert the tree and return its root (Example 1)", () => {
  expect(reverseWords("Let's take LeetCode contest")).toBe(
    "s'teL ekat edoCteeL tsetnoc"
  );
});

function reverseWords(s: string): string {
  // Maybe a better approach would be to use two pointers, so we can avoid the split/join ops...
  let res: string[] = [];
  let words: string[] = s.split(" ");
  for (let wordStr of words) {
    let word = wordStr.split("");
    let last: number = word.length - 1;
    for (let i = 0; i <= last / 2; i++) {
      let aux = word[i];
      word[i] = word[last - i];
      word[last - i] = aux;
    }
    res.push(word.join(""));
  }
  return res.join(" ");
}

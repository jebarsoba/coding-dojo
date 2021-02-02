const MergeSorter = require('../src/MergeSorter');

test('Merge sort, merge step', () => {
  let given = [2, 5, 8, 23, 7, 9, 12, 16];
  let expected = [2, 5, 7, 8, 9, 12, 16, 23];

  new MergeSorter().merge(given, 0, 3, 7);

  expect(given).toEqual(expected);
});

test('Merge sort, with the simplest example possible', () => {
  let given = [8, 7];
  let expected = [7, 8];

  new MergeSorter().sort(given);

  expect(given).toEqual(expected);
});

test('Merge sort, with 3 elements', () => {
  let given = [8, 7, 2];
  let expected = [2, 7, 8];

  new MergeSorter().sort(given);

  expect(given).toEqual(expected);
});

test('Merge sort, with 4 elements', () => {
  let given = [7, 8, 2, 9];
  let expected = [2, 7, 8, 9];

  new MergeSorter().sort(given);

  expect(given).toEqual(expected);
});
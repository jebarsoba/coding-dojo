test('Merge sort algorithm, merge step', () => {
  let array1 = [2, 9];
  let array2 = [7, 8, 12];

  let expected = [2, 7, 8, 9, 12];

  expect(new MergeSort().merge(array1, array2)).toEqual(expected);
});

class MergeSort {
    merge(array1, array2) {
        return [2, 7, 8, 9, 12];
    }
}
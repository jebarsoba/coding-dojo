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

class MergeSorter {
  sort(array) {
    this.mergeSort(array, 0, array.length - 1);
  }

  mergeSort(array, start, end) {
    if (start < end) {
      let middle = Math.floor((start + end) / 2);
      this.mergeSort(array, start, middle);
      this.mergeSort(array, middle + 1, end);
      this.merge(array, start, middle, end);
    }
  }

  merge(array, start, middle, end) {
    const left = array.filter((_element, index) => { return index >= start && index <= middle });
    const right = array.filter((_element, index) => { return index > middle && index <= end });

    let i = 0;
    let j = 0;
    
    while (!(i == left.length && j == right.length)) {
      if (i == left.length) {
        array[start + i + j] = right[j++];

        continue;
      }

      if (j == right.length) {
        array[start + i + j] = left[i++];

        continue;
      }

      if (left[i] <= right[j])
        array[start + i + j] = left[i++];
      else
        array[start + i + j] = right[j++];
    }
  }
}
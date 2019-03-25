test('Merge sort, merge step', () => {
  let array1 = [2, 9];
  let array2 = [7, 8, 12];

  let expected = [2, 7, 8, 9, 12];

  expect(new MergeSort().merge(array1, array2)).toEqual(expected);
});

test('Merge sort, merge step, another example', () => {
  let array1 = [2];
  let array2 = [7];

  let expected = [2, 7];

  expect(new MergeSort().merge(array1, array2)).toEqual(expected);
});

test('Merge sort, divide and conquer with the simplest example possible', () => {
  let given = [7, 2];
  let expected = [2, 7];

  expect(new MergeSort().sort(given)).toEqual(expected);
});

class MergeSort {
  constructor() {
    this.result = [];
    this.currentIndex1 = 0;
    this.currentIndex2 = 0;
  }

  sort(array) {
    return this.merge([array[0]], [array[1]]);
  }

  /*
  1) Compare first two elements
  2) Put smaller in resulting array
  3) Move forward source array pointer
  4) When one array is done, copy rest of other array to resulting array
  */
  merge(array1, array2) {
    if (this.currentIndex1 == array1.length && this.currentIndex2 == array2.length)
      return this.result;

    if (this.currentIndex1 == array1.length) {
      this.result.push(array2[this.currentIndex2++]);

      return this.merge(array1, array2);
    }

    if (this.currentIndex2 == array2.length) {
      this.result.push(array1[this.currentIndex1++]);

      return this.merge(array1, array2);
    }

    if (array1[this.currentIndex1] <= array2[this.currentIndex2]) {
      this.result.push(array1[this.currentIndex1++]);

      return this.merge(array1, array2);
    }
    else {
      this.result.push(array2[this.currentIndex2++]);

      return this.merge(array1, array2);
    }
  }
}
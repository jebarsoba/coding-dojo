test('Merge sort, merge step', () => {
  let array1 = [2, 5, 8, 23, 7, 9, 12, 16];

  let expected = [2, 5, 7, 8, 9, 12, 16, 23];

  expect(new MergeSort().merge(array1, 0, 3, 7)).toEqual(expected);
});

test('Merge sort, with the simplest example possible', () => {
  let given = [8, 7];
  let expected = [7, 8];

  expect(new MergeSort().sort(given, 0, 1)).toEqual(expected);
});

test('Merge sort, with 3 elements', () => {
  let given = [8, 7, 2];
  let expected = [2, 7, 8];

  expect(new MergeSort().sort(given, 0, 2)).toEqual(expected);
});

test('Merge sort, with 4 elements', () => {
  let given = [7, 8, 2, 9];
  let expected = [2, 7, 8, 9];

  expect(new MergeSort().sort(given, 0, 3)).toEqual(expected);
});

class MergeSort {
  /**
   * Pseudocode:
   * MergeSort(A, start, end)
   *   if start < end //line 1
   *     middle = Floor[(start + end)/2] //line 2
   *     MergeSort(A, start, middle) // line 3
   *     MergeSort(A, middle+1, end) // line 4
   *     Merge(A, start, middle, end) // line 5
   * 
   * Test with 2 elements:
   * MergeSort([8, 7], 0, 1)
   *   context: { A: [8, 7], start: 0, end: 1, middle: 0, at line 3 }
   * 
   * MergeSort([8, 7]], 0, 0)
   *   context: { A: [8, 7], start: 0, end: 0, middle: N/A, at line 1 } -> Breaking condition
   *   context: { A: [8, 7], start: 0, end: 1, middle: 0, at line 3 }
   *
   * exit:
   *   Resumes execution context stack top item: context: { A: [8, 7], start: 0, end: 1, middle: 0, at line 3 }
   *     MergeSort([8, 7], 1, 1)
   *       context: { A: [8, 7], start: 1, end: 1, middle: N/A, at line 1 } -> Breaking condition
   *       context: { A: [8, 7], start: 0, end: 1, middle: 0, at line 4 }
   * 
   * exit:
   *   Resumes execution context stack top item: context: { A: [8, 7], start: 0, end: 1, middle: 0, at line 4 }
   *     Merge([8, 7], 0, 0, 1)
   *       context: { A: [8, 7], start: 0, middle: 0, end: 1, at line 5 } -> result [7, 8]
   * 
   * Test with 3 elements:
   * MergeSort(A: [8, 7, 2], start: 0, end: 2)
   *   context: { A: [8, 7, 2], start: 0, end: 2, middle: 1, at line 3}
   * 
   * MergeSort([8, 7, 2], 0, 1)
   *   context: { A: [8, 7, 2], start: 0, end: 1, middle: 0, at line 3}
   *   context: { A: [8, 7, 2], start: 0, end: 2, middle: 1, at line 3}
   * 
   * MergeSort([8, 7, 2], 0, 0)
   *   context: { A: [8, 7, 2], start: 0, end: 0, middle: N/A, at line 1} -> Breaking condition
   *   context: { A: [8, 7, 2], start: 0, end: 1, middle: 0, at line 3}
   *   context: { A: [8, 7, 2], start: 0, end: 2, middle: 1, at line 3}
   * 
   * exit:
   *   Resumes execution context stack top item: context: { A: [8, 7, 2], start: 0, end: 1, middle: 0, at line 3}
   *     MergeSort([8, 7, 2], 1, 1)
   *       context: { A: [8, 7, 2], start: 1, end: 1, middle: N/A, at line 1} -> Breaking condition
   *       context: { A: [8, 7, 2], start: 0, end: 2, middle: 1, at line 3}
   * 
   * exit:
   *   Resumes execution context stack top item: context: { A: [8, 7, 2], start: 0, end: 2, middle: 1, at line 3}
   *     MergeSort([8, 7, 2], 2, 2)
   *       context: { A: [8, 7, 2], start: 2, end: 2, middle: N/A, at line 1} -> Breaking condition
   *       context: { A: [8, 7, 2], start: 0, end: 2, middle: 1, at line 4}
   * 
   * exit:
   *   Resumes execution context stack top item: context: context: { A: [8, 7, 2], start: 0, end: 2, middle: 1, at line 4}
   *     Merge([8, 7, 2], 0, 1, 2) -> [2, 8, 7]
   */
  sort(array, start, end) {
    if (start < end) {
      let middle = Math.floor((start + end) / 2);
      this.sort(array, start, middle);
      this.sort(array, middle + 1, end);
      return this.merge(array, start, middle, end);
    }
  }

  /*
  1) Compare first two elements
  2) Put smaller in resulting array
  3) Move forward source array pointer
  4) When one array is done, copy rest of other array to resulting array
  */
 merge(array, start, middle, end) {
    let result = [];
    const array1 = array.filter((_element, index) => { return index >= start && index <= middle });
    const array2 = array.filter((_element, index) => { return index > middle && index <= end });

    let currentIndex1 = 0;
    let currentIndex2 = 0;
    
    while (!(currentIndex1 == array1.length && currentIndex2 == array2.length)) {
      if (currentIndex1 == array1.length) {
        result.push(array2[currentIndex2++]);

        continue;
      }

      if (currentIndex2 == array2.length) {
        result.push(array1[currentIndex1++]);

        continue;
      }

      if (array1[currentIndex1] <= array2[currentIndex2])
       result.push(array1[currentIndex1++]);
      else
        result.push(array2[currentIndex2++]);
    }

    return result;
  }
}
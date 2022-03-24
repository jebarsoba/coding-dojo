/**
 * Quick sort:
 * Time complexity, on average: O (n log n)
 * In place sorting
 *
 * quickSort(array, start, end):
 *   if start < end (breaking condition, when dealing with a single element)
 *     pivot = partition(array, start, end)
 *     quickSort(array, start, pivot - 1)
 *     quickSort(array, pivot + 1, end)
 *
 * partition(array, start, end):
 *   pivot = array[end]
 *   i = start
 *   for j= start to end - 1
 *     if array[j] <= pivot
 *       exchange array[i] with array[j]
 *       i = i + 1
 *   exchange array[i] with array[end]
 *   return i
 */

describe("quick sort", () => {
  it("example 1", () => {
    let array = [12, 9, 7, 15, 10];
    quickSort(array, 0, array.length - 1);
    expect(array).toEqual([7, 9, 10, 12, 15]);
  });
});

function quickSort(array: number[], start: number, end: number): void {
  if (start < end) {
    const pivot = partition(array, start, end);
    quickSort(array, start, pivot - 1);
    quickSort(array, pivot + 1, end);
  }
}

function partition(array: number[], start: number, end: number): number {
  const pivot = array[end];
  let i = start;
  for (let j = start; j < end; j++) {
    if (array[j] <= pivot) {
      const aux = array[i];
      array[i] = array[j];
      array[j] = aux;

      i++;
    }
  }
  const aux = array[i];
  array[i] = array[end];
  array[end] = aux;
  return i;
}

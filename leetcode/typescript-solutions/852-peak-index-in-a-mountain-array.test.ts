test("Example 1", () => {
  expect(peakIndexInMountainArray([0, 1, 0])).toBe(1);
});

// O(log N), Binary Search approach
function peakIndexInMountainArray(arr: number[]): number {
  let min = 0;
  let max = arr.length - 1;

  while (min < max) {
    let mid = Math.floor((min + max) / 2);
    if (arr[mid] < arr[mid + 1]) {
      min = mid + 1;
    } else {
      max = mid;
    }
  }

  return min;
}

// Another solution with O(N) time complexity
// function peakIndexInMountainArray(arr: number[]): number {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return i;
//     }
//   }
// }

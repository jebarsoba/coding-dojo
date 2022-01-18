test("find the kth largest element in a stream (Example 1)", () => {
  let kthLargest = new KthLargest(3, [4, 5, 8, 2]);
  expect(kthLargest.add(3)).toBe(4);
  expect(kthLargest.add(5)).toBe(5);
  expect(kthLargest.add(10)).toBe(5);
  expect(kthLargest.add(9)).toBe(8);
  expect(kthLargest.add(4)).toBe(8);
});

// This problem can be solved in a more efficient way through the use of heaps...
class KthLargest {
  private k: number;
  private nums: number[];

  constructor(k: number, nums: number[]) {
    this.k = k;
    this.nums = nums;
  }

  add(val: number): number {
    this.nums.push(val);
    this.nums.sort((a, b) => a - b);
    return this.nums[this.nums.length - this.k];
  }
}

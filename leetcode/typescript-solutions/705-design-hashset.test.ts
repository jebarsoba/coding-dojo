test("design a HashSet without using any built-in hash table libraries (Example 1)", () => {
  let myHashSet = new MyHashSet();
  myHashSet.add(1); // set = [1]
  myHashSet.add(2); // set = [1, 2]
  expect(myHashSet.contains(1)).toBeTruthy(); // return True
  expect(myHashSet.contains(3)).toBeFalsy(); // return False, (not found)
  myHashSet.add(2); // set = [1, 2]
  expect(myHashSet.contains(2)).toBeTruthy(); // return True
  myHashSet.remove(2); // set = [1]
  expect(myHashSet.contains(2)).toBeFalsy(); // return False, (already removed)
});

/**
 * This approach uses an object as a single big bucket. It has O(1) time and O(N).
 * Another approach would be to use a collection of buckets, with a linked list per each of them.
 */
class MyHashSet {
  private map: {
    [k: number]: boolean;
  } = {};

  constructor() {}

  add(key: number): void {
    if (this.map[key]) {
      return;
    }

    this.map[key] = true;
  }

  remove(key: number): void {
    if (this.map[key]) {
      delete this.map[key];
    }
  }

  contains(key: number): boolean {
    if (this.map[key]) {
      return true;
    }

    return false;
  }
}

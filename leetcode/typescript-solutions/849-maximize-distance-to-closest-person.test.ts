/**
 * You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed).
 * There is at least one empty seat, and at least one person sitting.
 * Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized.
 * Return that maximum distance to the closest person.
 */
test("Example 1", () => {
  expect(maxDistToClosest([0, 0, 1])).toBe(2);
});

test("Example 2", () => {
  expect(maxDistToClosest([1, 0, 1])).toBe(1);
});

test("Example 3", () => {
  expect(maxDistToClosest([0, 0, 0, 0, 1, 0, 1, 0, 0])).toBe(4);
});

test("Example 4", () => {
  expect(maxDistToClosest([0, 1, 1, 1, 0, 0, 1, 0, 0])).toBe(2);
});

test("Example 5", () => {
  expect(maxDistToClosest([0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1])).toBe(3);
});

test("Example 6", () => {
  expect(maxDistToClosest([0, 0, 1, 0, 0, 0])).toBe(3);
});

test("Example 7", () => {
  expect(
    maxDistToClosest([
      1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
    ])
  ).toBe(5);
});

test("Example 8", () => {
  expect(
    maxDistToClosest([0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0])
  ).toBe(3);
});

test("Example 9", () => {
  expect(
    maxDistToClosest([
      0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1,
      0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
      0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0,
      0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    ])
  ).toBe(7);
});

test("Example 10", () => {
  expect(maxDistToClosest([1, 0, 0, 0, 1, 0, 1])).toBe(2);
});

function maxDistToClosest(seats: number[]): number {
  let consecEmptySeats = 0;
  let maxConsecEmptySeats = consecEmptySeats;
  let res = null;

  // Alex sits in between two people
  for (let i = 0; i < seats.length; i++) {
    if (!seats[i]) {
      consecEmptySeats++;

      if (consecEmptySeats >= maxConsecEmptySeats) {
        maxConsecEmptySeats = consecEmptySeats;

        res = Math.floor((maxConsecEmptySeats + 1) / 2);
      }
    } else {
      consecEmptySeats = 0;
    }
  }

  // Alex sits in the far left
  consecEmptySeats = 0;
  for (let i = 0; i < seats.length; i++) {
    if (!seats[i]) {
      consecEmptySeats++;
    } else {
      res = Math.max(res, consecEmptySeats);
      break;
    }
  }

  // Alex sits in the far right
  consecEmptySeats = 0;
  for (let i = seats.length - 1; i >= 0; i--) {
    if (!seats[i]) {
      consecEmptySeats++;
    } else {
      res = Math.max(res, consecEmptySeats);
      break;
    }
  }

  return res;
}

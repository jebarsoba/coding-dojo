test("given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, should return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule (Example 1)", () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBeTruthy();
});

test("given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, should return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule (Example 2)", () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBeFalsy();
});

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (!n) {
    return true;
  }

  let plotsPlanted = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      !flowerbed[i] &&
      (i + 1 === flowerbed.length || !flowerbed[i + 1]) &&
      (i - 1 < 0 || !flowerbed[i - 1])
    ) {
      flowerbed[i] = 1;
      plotsPlanted++;

      if (plotsPlanted === n) {
        return true;
      }
    }
  }

  return plotsPlanted === n;
}

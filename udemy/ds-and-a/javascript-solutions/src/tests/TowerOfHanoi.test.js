const TowerOfHanoi = require('../TowerOfHanoi');

test('Solving tower with 2 discs', () => {
  var towerOfHanoi = new TowerOfHanoi();
  towerOfHanoi.Push(1);
  towerOfHanoi.Push(2);

  expect(towerOfHanoi.Solve()).toBe('A ; B ; C 2, 1, ');
});

const TowerOfHanoi = require('../TowerOfHanoi');

test('Solving tower with 2 discs', () => {
  let towerOfHanoi = new TowerOfHanoi();
  towerOfHanoi.Push(2);
  towerOfHanoi.Push(1);

  expect(towerOfHanoi.Solve()).toBe('A ; B ; C 1, 2, ');
});

test('Solving tower with 3 discs', () => {
  let tower = new TowerOfHanoi();
  tower.Push(3);
  tower.Push(2);
  tower.Push(1);

  expect(tower.Solve()).toBe('A ; B ; C 1, 2, 3, ');
});

const TowerOfHanoi = require('../../src/Recursion/TowerOfHanoi');

test('Solving tower with 2 discs', () => {
  const towerOfHanoi = new TowerOfHanoi();
  towerOfHanoi.push(2);
  towerOfHanoi.push(1);

  const numberOfDiscs = 2;
  const from = 'A';
  const to = 'C';
  const intermediate = 'B';
  towerOfHanoi.move(numberOfDiscs, from, to, intermediate);

  expect(towerOfHanoi.toString()).toBe('A ; B ; C 2, 1');
});

test('Solving tower with 3 discs', () => {
  const towerOfHanoi = new TowerOfHanoi();
  towerOfHanoi.push(3);
  towerOfHanoi.push(2);
  towerOfHanoi.push(1);

  const numberOfDiscs = 3;
  const from = 'A';
  const to = 'C';
  const intermediate = 'B';
  towerOfHanoi.move(numberOfDiscs, from, to, intermediate);

  expect(towerOfHanoi.toString()).toBe('A ; B ; C 3, 2, 1');
});
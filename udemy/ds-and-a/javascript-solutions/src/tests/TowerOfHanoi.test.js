const TowerOfHanoi = require('../TowerOfHanoi');

test('Solving tower with 2 discs', () => {
  const towerOfHanoi = new TowerOfHanoi();
  towerOfHanoi.Push(2);
  towerOfHanoi.Push(1);

  expect(towerOfHanoi.Solve()).toBe('A ; B ; C 1, 2, ');
});

test('Solving tower with 3 discs', () => {
  const tower = new TowerOfHanoi();
  tower.Push(3);
  tower.Push(2);
  tower.Push(1);

  expect(tower.Solve()).toBe('A ; B ; C 1, 2, 3, ');
});

test('Solving tower with different number of discs, recursively', () => {
  const towerOfHanoi = new TowerOfHanoi();

  for (let discs = 1; discs <= 20; ++discs){
    towerOfHanoi.move(discs, 'A', 'C', 'B');
    //console.log(`${discs} discs => ${towerOfHanoi.getMoves()} moves`); //20 discs => 2097130 moves; Time complexity is O(2^n).
  }
});

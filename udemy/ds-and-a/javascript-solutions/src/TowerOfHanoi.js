const Stack = require('./Stack');

class TowerOfHanoi {
  constructor() {
    this.towerA = new Stack();
    this.towerB = new Stack();
    this.towerC = new Stack();
    this.discsLeftInTowerA = 0;
    this.discsToMove = 0;
  }

  Push(disc) {
    this.towerA.Push(disc);

    ++this.discsLeftInTowerA;
    ++this.discsToMove;
  }

  Solve() {
    if (this.discsLeftInTowerA == this.discsToMove) {
      this.Move(this.towerA, this.towerB);

      --this.discsLeftInTowerA;

      return this.Solve();
    }

    if (this.discsLeftInTowerA == 1) {
      this.Move(this.towerA, this.towerC);

      --this.discsLeftInTowerA;
      --this.discsToMove;

      return this.Solve();
    }

    if (this.discsLeftInTowerA == 0 && this.discsToMove != 0) {
      this.Move(this.towerB, this.towerC);

      --this.discsToMove;

      return this.Solve();
    }

    if (this.discsToMove == 0)
      return `A ${this.towerA.toString()}; B ${this.towerB.toString()}; C ${this.towerC.toString()}`;
  }

  Move(towerSource, towerDest) {
    return towerDest.Push(towerSource.Pop());
  }
}

module.exports = TowerOfHanoi;

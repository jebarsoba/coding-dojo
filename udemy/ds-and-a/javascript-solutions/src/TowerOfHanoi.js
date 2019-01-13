const Stack = require('./Stack');

class TowerOfHanoi {
  constructor() {
    this.towerA = new Stack();
    this.towerB = new Stack();
    this.towerC = new Stack();

    this.discsLeftInTowerA = 0;
    this.discsToMove = 0;
    this.discsInTowerC = 0;
  }

  Push(disc) {
    this.towerA.Push(disc);

    ++this.discsLeftInTowerA;
    ++this.discsToMove;
  }

  Solve() {
    console.log(`${this.toString()}`);

    if (this.discsToMove == 0)
      return this.toString();

    if (this.discsLeftInTowerA <= this.discsToMove && this.discsLeftInTowerA == 2) {
      this.Move(this.towerA, this.towerB);

      --this.discsLeftInTowerA;

      return this.Solve();
    }

    if (this.discsLeftInTowerA == 1 && this.discsToMove >= 1 && ( this.discsInTowerC == 0 || (this.towerC.Peek() - this.towerA.Peek() == 1) )) {
      this.Move(this.towerA, this.towerC);

      --this.discsLeftInTowerA;
      ++this.discsInTowerC;
      --this.discsToMove;

      return this.Solve();
    }

    if (this.discsLeftInTowerA == this.discsToMove && this.discsToMove > 0) {
      this.Move(this.towerA, this.towerC);

      --this.discsLeftInTowerA;
      ++this.discsInTowerC;

      return this.Solve();
    }

    if (this.towerC.Peek() - this.towerB.Peek() == 1) {
      this.Move(this.towerB, this.towerC);

      ++this.discsInTowerC;
      --this.discsToMove;

      return this.Solve();
    }

    if (this.towerB.Peek() - this.towerC.Peek() == 1) {
      this.Move(this.towerC, this.towerB);

      --this.discsInTowerC;

      return this.Solve();
    }

    if (this.discsLeftInTowerA == 0 && (this.towerC.Peek() - this.towerB.Peek()) > 1) {
      this.Move(this.towerB, this.towerA);

      ++this.discsLeftInTowerA;

      return this.Solve();
    }
  }

  Move(towerSource, towerDest) {
    return towerDest.Push(towerSource.Pop());
  }

  toString() {
     return `A ${this.towerA.toString()}; B ${this.towerB.toString()}; C ${this.towerC.toString()}`;
  }
}

module.exports = TowerOfHanoi;

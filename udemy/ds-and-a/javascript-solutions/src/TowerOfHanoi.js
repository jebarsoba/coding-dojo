const Stack = require('./Stack');

class TowerOfHanoi {
  constructor() {
    this.towerA = new Stack();
    this.towerB = new Stack();
    this.towerC = new Stack();

    this.discsLeftInTowerA = 0;
    this.discsToMove = 0;
    this.discsInTowerC = 0;

    this.moves = 0;
  }

  Push(disc) {
    this.towerA.Push(disc);

    ++this.discsLeftInTowerA;
    ++this.discsToMove;
  }

  Solve() {
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

  //move(2, 'A', 'C', 'B');
  //  context: { discs: 2, from: 'A', to: 'C', mid: 'B', at line 4 }
  //
  //move(1, 'A', 'B', 'C');
  //  context: { discs: 1, from: 'A', to: 'B', mid: 'C', at line 1 }
  //  context: { discs: 2, from: 'A', to: 'C', mid: 'B', at line 4 }
  //
  //exit:
  //  Output: Moving disc 1 from A to B (move(1, 'A', 'B', 'C'))
  //  Resumes execution context stack top item: context: { discs: 2, from: 'A', to: 'C', mid: 'B', at line 4 }
  //  Output: Moving disc 2 from A to C (move(2, 'A', 'C', 'B'))
  //
  //move(1, 'B', 'C', 'A');
  //  context: { discs: 1, from: 'B', to: 'C', mid: 'A', at line 1 }
  //
  //exit:
  //  Output: Moving disc 1 from B to C (move(1, 'B', 'C', 'A'))
  move(discs, from, to, mid) {
    if (discs == 1) //line 1
      return this.trackMove(discs, from, to);  //line 2

    this.move(discs - 1, from, mid, to); //line 4
    this.trackMove(discs, from, to); //line 5
    this.move(discs - 1, mid, to, from); //line 6
  }

  trackMove(discs, from, to) {
    ++this.moves;
    //console.log(`Moving disc ${discs} from ${from} to ${to}`);
  }

  getMoves() {
    return this.moves;
  }
}

module.exports = TowerOfHanoi;

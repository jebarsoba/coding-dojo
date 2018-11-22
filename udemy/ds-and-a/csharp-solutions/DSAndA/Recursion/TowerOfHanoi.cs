using DSAndA.StacksAndQueues.Assignment1;

namespace DSAndA.Recursion
{
    public class TowerOfHanoi
    {
        private StackUsingLinkedListAsUnderlyingDS<int> towerA = new StackUsingLinkedListAsUnderlyingDS<int>();
        private StackUsingLinkedListAsUnderlyingDS<int> towerB = new StackUsingLinkedListAsUnderlyingDS<int>();
        private StackUsingLinkedListAsUnderlyingDS<int> towerC = new StackUsingLinkedListAsUnderlyingDS<int>();
        private int discsInTowerA;
        private int discsToMove;

        public void Push(int disc)
        {
            this.Push(disc: disc, tower: this.towerA);

            ++this.discsInTowerA;
            ++this.discsToMove;
        }

        public string Solve()
        {
            if (this.discsToMove == 0)
                return $"A {this.towerA.ToString()}; B {this.towerB.ToString()}; C {this.towerC.ToString()}";

            //Moving disc 2 from A to C
            if (this.discsInTowerA == 1)
            {
                this.Move(source: this.towerA, destination: this.towerC);

                --this.discsInTowerA;
                --this.discsToMove;
            }

            //Moving disc 1 from A to B
            if (this.discsToMove > 1)
            {
                this.Move(source: this.towerA, destination: this.towerB);

                --this.discsInTowerA;
            }

            //Moving disc 1 from B to C
            if (this.discsInTowerA == 0 && this.discsToMove > 0)
            {
                this.Move(source: this.towerB, destination: this.towerC);

                --this.discsToMove;
            }

            return this.Solve();
        }

        private void Push(int disc, StackUsingLinkedListAsUnderlyingDS<int> tower)
        {
            tower.Push(disc);
        }

        private void Move(StackUsingLinkedListAsUnderlyingDS<int> source, StackUsingLinkedListAsUnderlyingDS<int> destination)
        {
            destination.Push(source.Pop());
        }
    }
}
using DSAndA.StacksAndQueues.Assignment1;

namespace DSAndA.Recursion
{
    public class TowerOfHanoi
    {
        private StackUsingLinkedListAsUnderlyingDS<int> towerA = new StackUsingLinkedListAsUnderlyingDS<int>();
        private StackUsingLinkedListAsUnderlyingDS<int> towerB = new StackUsingLinkedListAsUnderlyingDS<int>();
        private StackUsingLinkedListAsUnderlyingDS<int> towerC = new StackUsingLinkedListAsUnderlyingDS<int>();

        public void Push(int disc)
        {
            this.Push(disc: disc, tower: this.towerA);
        }

        public string Solve()
        {
            //Moving disc 1 from A to B
            this.Move(source: this.towerA, destination: this.towerB);

            //Moving disc 2 from A to C
            this.Move(source: this.towerA, destination: this.towerC);

            //Moving disc 1 from B to C
            this.Move(source: this.towerB, destination: this.towerC);

            return $"A {this.towerA.ToString()}; B {this.towerB.ToString()}; C {this.towerC.ToString()}";
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
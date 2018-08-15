namespace DSAndA
{
    public class InsertionInOrderedArray
    {
        public int[] Insert(int[] orderedArray, int itemToInsert)
        {
            //Arrays in C# are inmutable, so I have to create a new array but with one slot more than the original one...
            int[] newOrderedArray = this.GetCopyOfArrayWithFreeSlotAtEnd(orderedArray);

            int positionWhereItemShouldBeInserted = this.GetPositionWhereItemShouldBeInserted(itemToInsert, newOrderedArray);

            //Making space to insert the item...
            int lastElementPosition = orderedArray.Length - 1;
            int currentPosition = lastElementPosition;

            do
            {
                newOrderedArray[currentPosition + 1] = newOrderedArray[currentPosition--];
            } while (currentPosition == positionWhereItemShouldBeInserted);

            newOrderedArray[positionWhereItemShouldBeInserted] = itemToInsert;

            return newOrderedArray;
        }

        private int[] GetCopyOfArrayWithFreeSlotAtEnd(int[] orderedArray)
        {
            int[] sameOrderedArrayButWithOneSlotMore = new int[orderedArray.Length + 1];

            for (int i = 0; i < orderedArray.Length; i++)
                sameOrderedArrayButWithOneSlotMore[i] = orderedArray[i];

            return sameOrderedArrayButWithOneSlotMore;
        }

        private int GetPositionWhereItemShouldBeInserted(int itemToInsert, int[] newOrderedArray)
        {
            int positionWhereItemShouldBeInserted = 0;

            while (itemToInsert >= newOrderedArray[positionWhereItemShouldBeInserted])
                positionWhereItemShouldBeInserted++;

            return positionWhereItemShouldBeInserted;
        }
    }
}
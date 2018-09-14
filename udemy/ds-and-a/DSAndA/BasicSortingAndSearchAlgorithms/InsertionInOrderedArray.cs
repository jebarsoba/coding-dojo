namespace DSAndA.BasicSortingAndSearchAlgorithms
{
    public class InsertionInOrderedArray
    {
        public int[] Insert(int[] orderedArray, int itemToInsert)
        {
            //Arrays in C# are inmutable, so I have to create a new array but with one slot more than the original one...
            int[] newOrderedArray = this.GetCopyOfArrayWithFreeSlotAtEnd(orderedArray);

            //If the item to insert is the greatest, just insert it at the end...
            int originalArrayLastElementPosition = orderedArray.Length - 1;

            if (itemToInsert >= newOrderedArray[originalArrayLastElementPosition])
            {
                newOrderedArray[originalArrayLastElementPosition + 1] = itemToInsert;

                return newOrderedArray;
            }

            int positionWhereItemShouldBeInserted = this.GetPositionWhereItemShouldBeInserted(itemToInsert, orderedArray);

            //Making space to insert the item...
            int currentPosition = originalArrayLastElementPosition;

            do
                newOrderedArray[currentPosition + 1] = newOrderedArray[currentPosition--];
            while (currentPosition != positionWhereItemShouldBeInserted - 1);

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

        private int GetPositionWhereItemShouldBeInserted(int itemToInsert, int[] orderedArray)
        {
            int positionWhereItemShouldBeInserted = 0;

            while (positionWhereItemShouldBeInserted < orderedArray.Length && itemToInsert >= orderedArray[positionWhereItemShouldBeInserted])
                positionWhereItemShouldBeInserted++;

            return positionWhereItemShouldBeInserted;
        }
    }
}
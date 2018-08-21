namespace DSAndA
{
    public class DeletionInOrderedArray
    {
        public int[] Delete(int[] orderedArray, int itemToDelete)
        {
            //Binary searching the item to delete...
            int itemToDeletePosition = new BinarySearch(orderedArray: orderedArray).Find(itemToDelete);

            //Compacting the array...
            int currentPosition = itemToDeletePosition;

            while (currentPosition < orderedArray.Length - 1)
                orderedArray[currentPosition] = orderedArray[++currentPosition];

            //Move the elements to the new array (with one position less)...
            int[] newArray = new int[orderedArray.Length - 1];

            for (int i = 0; i < newArray.Length; i++)
                newArray[i] = orderedArray[i];

            return newArray;
        }
    }
}
class MergeSorter {
    sort(array) {
      this.mergeSort(array, 0, array.length - 1);
    }
  
    mergeSort(array, start, end) {
      if (start < end) {
        let middle = Math.floor((start + end) / 2);
        this.mergeSort(array, start, middle);
        this.mergeSort(array, middle + 1, end);
        this.merge(array, start, middle, end);
      }
    }
  
    merge(array, start, middle, end) {
      const left = array.filter((_element, index) => { return index >= start && index <= middle });
      const right = array.filter((_element, index) => { return index > middle && index <= end });
  
      let i = 0;
      let j = 0;
      
      while (!(i == left.length && j == right.length)) {
        if (i == left.length) {
          array[start + i + j] = right[j++];
  
          continue;
        }
  
        if (j == right.length) {
          array[start + i + j] = left[i++];
  
          continue;
        }
  
        if (left[i] <= right[j])
          array[start + i + j] = left[i++];
        else
          array[start + i + j] = right[j++];
      }
    }
  }

  module.exports = MergeSorter;
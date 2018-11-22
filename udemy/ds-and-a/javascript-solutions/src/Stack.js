class Stack {
  constructor() {
    this.stackArray = [];
    this.topIndex = 0;
    this.size = 0;
  }

  Push(element) {
    this.stackArray.push(element);

    ++this.size;

    if (this.size > 1)
      ++this.topIndex;
  }

  Pop() {
    var poppedItem = this.stackArray.pop();

    if (poppedItem != null) {
      --this.topIndex;
      --this.size;
    }

    return poppedItem;
  }

  Peek() {
    return this.size > 0 ? this.stackArray[this.topIndex] : null;
  }
}

module.exports = Stack;

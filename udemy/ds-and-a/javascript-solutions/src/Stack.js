class Stack {
  constructor() {
    this.stackArray = [];
    this.topIndex = -1;
  }

  Push(element) {
    this.stackArray.push(element);

    ++this.topIndex;
  }

  Pop() {
    var poppedItem = this.stackArray.pop();

    if (poppedItem != null)
      --this.topIndex;

    return poppedItem;
  }

  Peek() {
    return this.topIndex >= 0 ? this.stackArray[this.topIndex] : null;
  }

  toString() {
    var result = '';
    let items = [];

    while (this.Peek() != null) {
      result += `${this.Peek()}, `;

      items.push(this.Pop());
    }

    for (let i = items.length - 1; i >= 0; i--)
      this.Push(items[i]);

    return result;
  }
}

module.exports = Stack;

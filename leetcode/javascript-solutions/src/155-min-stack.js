/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.minimums = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (this.getMin() === undefined || val <= this.getMin())
    this.minimums.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const element = this.stack.pop();
  if (element === this.getMin()) this.minimums.pop();
  return element;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minimums[this.minimums.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

module.exports = MinStack;

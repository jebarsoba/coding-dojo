class ValidParentheses {
  isValid(s) {
    let openBracketsStack = [];
    const peekOpenBracket = () =>
      openBracketsStack.length > 0
        ? openBracketsStack[openBracketsStack.length - 1]
        : undefined;

    let openBracketsMap = new Map();
    openBracketsMap.set("(");
    openBracketsMap.set("[");
    openBracketsMap.set("{");

    let bracketsMapping = new Map();
    bracketsMapping.set("(", ")");
    bracketsMapping.set("[", "]");
    bracketsMapping.set("{", "}");

    const bracketsExpression = s.split("");
    for (let i = 0; i < bracketsExpression.length; i++) {
      if (openBracketsMap.has(bracketsExpression[i])) {
        openBracketsStack.push(bracketsExpression[i]);
      } else {
        if (bracketsExpression[i] !== bracketsMapping.get(peekOpenBracket())) {
          return false;
        }
        openBracketsStack.pop();
      }
    }

    return openBracketsStack.length === 0;
  }
}

module.exports = ValidParentheses;

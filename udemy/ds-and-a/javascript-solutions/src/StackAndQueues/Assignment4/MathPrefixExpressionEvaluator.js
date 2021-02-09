const StackUsingArrayAsUnderlyingDS = require("../StackUsingArrayAsUnderlyingDS");

class MathPrefixExpressionEvaluator {
    constructor() {
        this.supportedOperators = [
            "+",
            "*"
        ];

        this.operators = new StackUsingArrayAsUnderlyingDS();
        this.numbers = new StackUsingArrayAsUnderlyingDS();
    }

    evaluate(expression) {
        let result = 0;

        const elements = expression.split(' ');
        elements.forEach(element => {
            if (this.isOperator(element)) {
                this.operators.push(element);
            } else {
                this.numbers.push(Number.parseInt(element));
            }

            if (this.numbers.length >= 2 && this.numbers.length >= this.operators.length) {
                const operator = this.operators.pop();
                const number1 = this.numbers.pop();
                const number2 = this.numbers.pop();

                result += this.calc(operator, number1, number2);
            }
        });

        if (this.numbers.length === 1) {
            const operator = this.operators.pop();
            const number1 = this.numbers.pop();

            result = this.calc(operator, result, number1);
        }

        return result;
    }

    isOperator(element) {
        return this.supportedOperators.find(operator => operator === element);
    }

    calc(operator, number1, number2) {
        if (!this.supportedOperators.find(supportedOperator => supportedOperator === operator)) {
            throw new Error(`Operator ${operator} not supported.`)
        }

        if (operator === "+") {
            return number1 + number2;
        }

        if (operator === "*") {
            return number1 * number2;
        }
    }
}

module.exports = MathPrefixExpressionEvaluator;
using DSAndA.StacksAndQueues.Assignment1;
using System;

namespace DSAndA.StacksAndQueues
{
    /// <summary>
    /// Paper tests scenarios:
    /// + 3 ( * 2 ( + 1 2 ) )
    /// Stack oper8ors: +, *, +
    /// Stack operands: 3, 2, 1 2
    /// 
    /// Pops + 1 2 => partialResult = 3
    /// Pops * 2 => partialResult = 2 * partialResult = 6
    /// Pops + 3 = 9 => partialResult = 3 + partialResult = 9
    /// 
    /// + 3 ( + ( * 2 8 ) 9 )
    /// Stack oper8ors: +, +, *, A
    /// Stack operands: 3, E, 2 8, 9
    /// 
    /// A: Awaiting result
    /// E: Evaluate awaiting result operands
    /// 
    /// Pops A 9 => awaitingResult1 = 9
    /// Pops * 2 8 => awaitingResult2 = 16
    /// Pops + E => result = awaitingResult1 + awaitingResult2 = 25
    /// Pops + 3 => result = 3 + result = 28
    /// </summary>
    public class MathPrefixExpressionEvaluator
    {
        StackUsingLinkedListAsUnderlyingDS<string> oper8orsStack = new StackUsingLinkedListAsUnderlyingDS<string>();
        StackUsingLinkedListAsUnderlyingDS<string> operandsStack = new StackUsingLinkedListAsUnderlyingDS<string>();

        public double Evaluate(string prefixExpression)
        {
            this.PopulateStacks(prefixExpression);

            return this.ProcessStacks();
        }

        private void PopulateStacks(string prefixExpression)
        {
            string[] expressionArray = this.TokenizeExpression(prefixExpression);

            string operands = "";

            for (int i = 0; i < expressionArray.Length; i++)
                if (this.IsOperand(expressionArray[i]))
                    operands += $"{expressionArray[i]} ";
                else
                {
                    if (this.IsParenthesis(expressionArray[i]))
                    {
                        if (!string.IsNullOrWhiteSpace(operands))
                        {
                            if (this.oper8orsStack.Length == this.operandsStack.Length)
                                this.oper8orsStack.Push("A"); // Set future "Awaiting result"...

                            this.operandsStack.Push(operands);
                            operands = "";
                        }
                        else // Set future "Evaluate awaiting result operands"...
                            this.operandsStack.Push("E");
                    }
                    else // Operator...
                        this.oper8orsStack.Push(expressionArray[i]);
                }

            if (operands != "")
                this.operandsStack.Push(operands);
        }

        private double ProcessStacks()
        {
            double result = 0;
            string awaitingResult1 = "";
            double awaitingResult2 = 0;

            string currentOper8or = this.oper8orsStack.Pop();
            string currentOperands = this.operandsStack.Pop();

            while (currentOper8or != null)
            {
                string[] operands = this.TokenizeExpression(currentOperands);

                if (operands.Length == 1)
                {
                    if (operands[0] == "E") // Evaluate awaiting result operands...
                        result = this.ApplyOperator(currentOper8or, awaitingResult1, awaitingResult2);
                    else
                    {
                        if (currentOper8or == "A") // Awaiting result...
                            awaitingResult1 = operands[0];
                        else
                            result = this.ApplyOperator(currentOper8or, operands[0], result);
                    }
                }
                else // Supporting only binary operations...
                {
                    if (!string.IsNullOrEmpty(awaitingResult1))
                        awaitingResult2 = this.ApplyOperator(currentOper8or, operands[0], operands[1]);
                    else
                        result = this.ApplyOperator(currentOper8or, operands[0], operands[1]);
                }

                currentOper8or = this.oper8orsStack.Pop();
                currentOperands = this.operandsStack.Pop();
            }

            return result;
        }

        private string[] TokenizeExpression(string expression)
        {
            return expression.Trim().Split(new char[] { ' ' });
        }

        private bool IsOperand(string token)
        {
            return int.TryParse(token, out int number);
        }

        private bool IsParenthesis(string token)
        {
            return token == "(" || token == ")";
        }

        private double ApplyOperator(string oper8or, string firstOperand, string secondOperand)
        {
            return this.ApplyOperator(oper8or, firstOperand, double.Parse(secondOperand));
        }

        private double ApplyOperator(string oper8or, string firstOperand, double secondOperand)
        {
            switch (oper8or)
            {
                case "+":
                    return int.Parse(firstOperand) + secondOperand;
                case "*":
                    return int.Parse(firstOperand) * secondOperand;
            }

            throw new NotImplementedException($"{oper8or} operator not yet implemented.");
        }
    }
}
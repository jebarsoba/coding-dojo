using DSAndA.StacksAndQueues.Assignment1;
using System;

namespace DSAndA.StacksAndQueues
{
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
                        this.operandsStack.Push(operands);
                        operands = "";
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

            string currentOper8or = this.oper8orsStack.Pop();
            string currentOperands = this.operandsStack.Pop();

            while (currentOper8or != null)
            {
                string[] operands = this.TokenizeExpression(currentOperands);

                if (operands.Length == 1)
                    result += int.Parse(operands[0]);
                else // Assuming two operands...
                    result += this.ApplyOperator(currentOper8or, operands[0], operands[1]);

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
            if (oper8or == "+")
                return int.Parse(firstOperand) + int.Parse(secondOperand);

            throw new NotImplementedException($"{oper8or} operator not yet implemented.");
        }
    }
}
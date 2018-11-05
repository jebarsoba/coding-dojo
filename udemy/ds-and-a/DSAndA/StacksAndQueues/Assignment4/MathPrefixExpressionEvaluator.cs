using System;

namespace DSAndA.StacksAndQueues
{
    public class MathPrefixExpressionEvaluator
    {
        public double Evaluate(string prefixExpression)
        {
            string[] expressionArray = prefixExpression.Split(new char[] { ' ' });

            return this.ApplyOperator(expressionArray[0], this.Evaluate(expressionArray, 1), this.Evaluate(expressionArray, 2));
        }

        private double Evaluate(string[] expressionArray, int index)
        {
            if (expressionArray[index] == "(")
            {
                string subExpression = "";

                while (expressionArray[++index] != ")")
                    subExpression += $"{expressionArray[index]} ";

                return this.Evaluate(subExpression.Trim());
            }

            return int.Parse(expressionArray[index]);
        }

        private double ApplyOperator(string oper8or, double firstOperand, double secondOperand)
        {
            if (oper8or == "+")
                return firstOperand + secondOperand;

            throw new NotImplementedException($"{oper8or} operator not yet implemented.");
        }
    }
}
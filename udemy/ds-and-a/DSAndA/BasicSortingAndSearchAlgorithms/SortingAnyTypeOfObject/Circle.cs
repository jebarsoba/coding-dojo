using System;

namespace DSAndA.BasicSortingAndSearchAlgorithms.SortingAnyTypeOfObject
{
    public class Circle : IComparable<Circle>
    {
        public double Radius { get; private set; }

        public Circle(double radius)
        {
            this.Radius = radius;
        }

        public override string ToString()
        {
            return this.Radius.ToString("F1");
        }

        public static bool operator >(Circle circle1, Circle circle2)
        {
            return circle1.Radius > circle2.Radius;
        }

        public static bool operator <(Circle circle1, Circle circle2)
        {
            return circle1.Radius < circle2.Radius;
        }

        public int CompareTo(Circle circle)
        {
            return this.Radius.CompareTo(circle.Radius);
        }
    }
}
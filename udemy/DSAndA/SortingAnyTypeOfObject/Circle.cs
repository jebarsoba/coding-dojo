namespace DSAndA.SortingAnyTypeOfObject
{
    public class Circle
    {
        public double Radius { get; private set; }

        public Circle(double radius)
        {
            this.Radius = radius;
        }

        public static bool operator >(Circle circle1, Circle circle2)
        {
            return circle1.Radius > circle2.Radius;
        }

        public static bool operator <(Circle circle1, Circle circle2)
        {
            return circle1.Radius < circle2.Radius;
        }
    }
}
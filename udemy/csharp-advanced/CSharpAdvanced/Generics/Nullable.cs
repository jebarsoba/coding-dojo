namespace CSharpAdvanced.Generics
{
    public class Nullable<T> where T : struct
    {
        private object value;

        public Nullable()
        {
        }

        public Nullable(T value)
        {
            this.value = value;
        }

        public bool HasValue { get { return this.value != null; } }

        public T GetValueOrDefault()
        {
            return this.HasValue ? (T)this.value : default(T);
        }
    }
}
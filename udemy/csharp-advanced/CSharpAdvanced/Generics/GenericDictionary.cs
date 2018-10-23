using System.Collections.Generic;

namespace CSharpAdvanced.Generics
{
    public class GenericDictionary<TKey, TValue>
    {
        private Dictionary<TKey, TValue> dictionary = new Dictionary<TKey, TValue>();

        public void Add(TKey key, TValue value)
        {
            this.dictionary.Add(key, value);
        }

        public TValue this[TKey key]
        {
            get { return this.dictionary[key]; }
        }
    }
}
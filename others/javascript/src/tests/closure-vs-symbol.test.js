var Pet = (() => {
  function Pet(type) {
    this.getType = () => {
      return type; // getTYpe will keep having access to type, even after the object creation itself...
    };
  }

  return Pet;
})();

test('Implementing private attributes using closures.', done => {
  var a = new Pet('dog');

  expect(a.getType()).toBe('dog');

  //Changing from outside (attempt)...
  a.type = null;

  expect(a.getType()).toBe('dog');

  done();
});

test('Implementing private attributes using closures.', done => {
  let Pet = (() => {
    function Pet(type) {
      this.getType = () => {
        return type; // getTYpe will keep having access to type, even after the object creation itself...
      };
    }

    return Pet;
  })();

  let a = new Pet('dog');

  expect(a.getType()).toBe('dog');

  // Changing from outside (attempt)...
  a.type = null;

  expect(a.getType()).toBe('dog');

  done();
});

test('Implementing private attributes using the Symbol ES6 primitive (although they\'ll be available through getOwnPropertySymbols).', done => {
  let Pet = (() => {
    let typeSymbol = Symbol('type');

    function Pet(type) {
      this[typeSymbol] = type;
    }

    Pet.prototype.getType = function() {
      return this[typeSymbol];
    };

    return Pet;
  })();

  let a = new Pet('dog');

  expect(a.getType()).toBe('dog');

  // Changing from outside (attempt)...
  a.type = null;

  expect(a.getType()).toBe('dog');

  done();
});

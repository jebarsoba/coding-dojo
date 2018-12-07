test('setTimeout and the event loop.', done => {
  let output = "";

  output += "Hola 1, ";

  setTimeout(function () {
    output += "Hola 2, "
  }, 0); // setTimeout adds the function call in the event loop but, as it has 0 timeout and no other calls are pending, it'll run inmediately...

  output += "Hola 3";

  expect(output).toBe("Hola 1, Hola 2, Hola 3")

  done();
});

test('Delete and variables.', done => {
  let x = 1;

  let output = (function () {
    // ES5 marks this line as syntax error, so it's not possible to run this question as is...
    // delete x; // Deletes both an object property and its value, but no effect on variables...

    return x;
  })();

  expect(output).toBe(1);

  done();
});

test('Delete and object properties', done => {
  let x = { foo: 1 };

  let output = (function () {
    delete x.foo;

    return x.foo;
  }();

  expect(output).toBe(undefined);

  done();
});

test('Delete and Object.create properties.', done => {
  let Employee = {
    company: 'xyz'
  };

  let empl = Object.create(Employee);

  delete empl.company; // By default, properties of an object created through Object.create are not writable. That's why delete will have no effect here...

  expect(empl.company).toBe('xyz')

  done();
});

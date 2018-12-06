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
  var x = 1;

  var output = (function () {
    // ES5 marks this line as syntax error, so it's not possible to run this question as is...
    // delete x; // Deletes both an object property and its value, but no effect on variables...

    return x;
  })();

  expect(output).toBe(1);

  done();
});

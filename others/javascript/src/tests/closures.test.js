test('Counting using a global var and closures.', done => {
  /*
  The variable add is assigned the return value of a self-invoking function.
  The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
  This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
  This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
  The counter is protected by the scope of the anonymous function, and can only be changed using the add function.
  A closure is a function having access to the parent scope, even after the parent function has closed.
  */

  let add = (() => {
    let counter = 0;

    return () => {
      return ++counter;
    };
  })();

  add();
  add();

  expect(add()).toBe(3);

  done();
});

test('Closures output question 1', done => {
  var salary = "1000$"; // Global execution context...

  (function () {
    expect(salary).toBe(undefined); // Hosting moves salary declaration to the top (but not the initialization), so salary exists in this self-invoking function execution context...

    var salary = "5000$";

    expect(salary).toBe("5000$");
  })();

  done();
});

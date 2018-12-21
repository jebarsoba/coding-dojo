function resultPromise() {
  return new Promise(function(resolve) {
    var value = 42;

    resolve(value + 2);
  });
}

test('Promises output question 1.', done => {
  resultPromise().then(function(result) {
    expect(result).toBe(44);

    return 88;
  }).then(function(secondResult) {
    expect(secondResult).toBe(88);

    done();
  });
});

test('Promises output question 2.', done => {
  resultPromise().then(function(result) {
    expect(result).toBe(44);
  }).then(function(secondResult) {
    expect(secondResult).toBe(undefined);

    done();
  });
});

function resultAnotherPromise(input) {
  return new Promise(function(resolve, reject) {
    if (input > 14)
      resolve(input - 2);
    else
      reject(input + 2);
  });
}

test('Promises output question 3.', done => {
  resultAnotherPromise(13).then(function(result) {
    console.log('result is: ', result);
  }, function(result) {
    expect(result).toBe(15);

    done();
  });
});

test('Promises output question 4.', done => {
  resultAnotherPromise(16).then(function(result) {
    expect(result).toBe(14);

    done();
  }, function(result) {
    console.log('wrong result is', result)
  });
});

test('Promises output question 5.', done => {
  resultAnotherPromise(10).then(function(result) {
    console.log('result if: ', result);
  });

  // Promise will be rejected, but am not specifying a handler for that... No output expected.

  done();
});

function calculate(value) {
  return new Promise(function(resolve, reject) {
    if (value < 6)
      resolve(value + 2);
    else
      resolve(value - 2);
  });
}

test('Promises output question 6.', done => {
  calculate(1). // 3
  then(calculate). // 5 (the return value 3 is directly passed as the argument for the calculate function)
  then(calculate). // 7
  then(calculate). // 5
  then(function(result) {
    expect(result).toBe(5);

    done();
  });
});

test('Promise.all.', done => {
  jest.useFakeTimers();

  const setup = time => () => new Promise(resolve => setTimeout(function () {
      console.log(time);

      return resolve();
    }, time));

  const read1 = setup(200); // Creates the Promise of running console.log...
  const read2 = setup(50);
  const read3 = setup(100);
  const write = setup(30);

  const execution = () => Promise.all([
    read1(),
    read2(),
    read3()
  ])
  // The Promise.all does the following:
  // Returns a single Promise that resolves when the 3 promises have resolved. And, when executed:
  // Puts each console.log inside a timer webapi.
  // As soon as the time's up, puts each console.log in the task queue.
  // And finally, the event loop takes each console.log from the task queue and puts it in the stack to run it.
  //
  // The then(write), when executed, will run after the Promise.all, and will finally print '30'.
  .then(function () {
    write();
  })
  .then(function () {
    done();
  });

  execution();

  jest.runAllTimers();

  //jest doesn't log the '30', but in Chrome it works as expected:
  // 50
  // 100
  // 200
  // 30
});

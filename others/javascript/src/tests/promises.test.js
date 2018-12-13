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

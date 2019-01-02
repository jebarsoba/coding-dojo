test('setTimeout and the event loop.', done => {
  /*
  When running the following code in Chrome, the output is different than with Jest:
  console.log("Hola 1, ");

  setTimeout(function () {
    console.log("Hola 2, ");
  }, 0);

  console.log("Hola 3, ");

  // Logs "Hola 1, Hola 3, Hola 2, "
  */

  let output = "";

  output += "Hola 1, ";

  jest.useFakeTimers();  // If I don't fake Jest timers, Jest will run the function inside setTimeout after collecting test results...

  /*
  Idea behind setTimeout 0: "Deffer this until the stack is clear".
  Pushing the function into the task queue.
  The event loop will do the following: when the stack is empty, takes an element from the task queue and pushes it into the stack to run it.
  */
  setTimeout(function () {
    output += "Hola 2, "
  }, 0);

  jest.runAllTimers();

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
  })();

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

test('Call and apply methods.', done => {
  var f1 = function(color, size) {
    f2.apply(this, arguments); // Runs f2 in the global object context, passing the arguments object (array including color and size).
  }

  var f2 = function(p1) {
    expect(p1).toEqual("red"); // Logs only the first argument, as f2 has only one parameter. So, the size arg is just ignored.
  }

  f1.call(this, "red", "1px"); // In this case, "this" refers to the global object. It runs f1, passing color and size args.

  done();
});

test('Use of the this keyword practice.', done => {
  function createButton() {
    return Object.create({
      _title: "Submit",
      _callback: null,

      firePress: function () {
        if (this._callback)
          this._callback.call(this);
      },

      setPressCallback: function (fCallback) {
        this._callback = fCallback;
      }
    });
  }

  var view = Object.create({
    _title: "Hello World",
    _button: createButton(),
    getButton: function () {
      return this._button;
    }
  });

  // view._title is "Hello World", but view._button._title is "Submit".
  // view._button.firePress calls the callback in the "this" context.
  // So, it should show view._button._title, which is "Submit"-
  view.getButton().setPressCallback(function () {
    expect(this._title).toBe("Submit");

    done();
  })

  view.getButton().firePress();
});

  test('Functional programming + Spread operator.', done => {
  const spotifySongs = [
    { id: 1, name: 'Curl of the Burl', artist: 'Mastodon', duration: 204 },
    { id: 2, name: 'Oblivion', artist: 'Mastodon', duration: 306 },
    { id: 3, name: 'Flying Whales', artist: 'Gojire', duration: 444 },
    { id: 4, name: 'LEnfant Sauvage', artist: 'Gojira', duration: 246}
  ];

  const lastFmSongs = [
    { id: 5, name: 'Chop Suey', artist: 'System of a Down', duration: 192 },
    { id: 6, name: 'Throne', artist: 'Bring me the Horizon', duration: 186 },
    { id: 7, name: 'Destrier', artist: 'Agent Fresco', duration: 132 },
    { id: 8, name: 'Out of the Black', artist: 'Royal Blood', duration: 240 }
  ];

  const allSongs = [spotifySongs, lastFmSongs];

  const songNames = allSongs.reduce((acc, currValue) => {
      return acc.concat(currValue);
    }, [])
    .map(song => {
      return {...song, duration: Math.floor(song.duration / 60)};
    })
    .filter(song => song.duration > 3)
    .map(song => song.name).join(" , ");

  expect(songNames).toBe("Oblivion , Flying Whales , LEnfant Sauvage , Out of the Black");

  done();
});

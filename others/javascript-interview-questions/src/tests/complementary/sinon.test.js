var sinon = require('sinon');

let person = {
  name: "Jorge",
  getName: function () {
    return this.name;
  }
}

test('Stubs.', done => {
  expect(person.getName()).toBe("Jorge");

  let stub = sinon.stub(person, "getName").returns("Juan");

  expect(person.getName()).toBe("Juan");

  done();
});

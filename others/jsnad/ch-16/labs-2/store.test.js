const store = require("./store");

test("given not a buffer, should err", (done) => {
  store(1, (err) => {
    expect(err).toStrictEqual(Error("input must be a buffer"));
    done();
  });
});

test("given a buffer, should return a valid id", (done) => {
  store(Buffer.from("👀"), (err, val) => {
    expect(err == null).toBe(true);
    expect(val.id).toHaveLength(4);
    done();
  });
});

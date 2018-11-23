var GitHubZen = require('../GitHubZen');
var util = require('util');

test('Retrieving random design philosophy from GitHub API, using callbacks.', done => {
  new GitHubZen().GetRandmonDesignPhilosophy('https://api.github.com/zen', (err, res) => {
    if (err)
      throw err;

    console.log(res);

    expect(res).toEqual(expect.anything());

    done();
  });
});

test('Retrieving random design philosophy from GitHub API, using promises.', done => {
  var getRandomPhilo = util.promisify(new GitHubZen().GetRandmonDesignPhilosophy);

  getRandomPhilo('https://api.github.com/zen').
    then((res) => {
      console.log(res);

      expect(res).toEqual(expect.anything());

      done();
    }).
    catch((err) => {
      throw err;
    });
});

test('Retrieving random design philosophy from GitHub API, using async/await.', async done => {
  var getRandomPhilo = util.promisify(new GitHubZen().GetRandmonDesignPhilosophy);

  try {
    var res = await getRandomPhilo('https://api.github.com/zen');

    console.log(res);

    expect(res).toEqual(expect.anything());

    done();
  } catch (err) {
    throw err;
  }
});

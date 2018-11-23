var GitHubZen = require('../GitHubZen');

test('Retrieving random design philosophy from GitHub API.', done => {
  new GitHubZen('https://api.github.com/zen').GetRandmonDesignPhilosophy((err, res) => {
    if (err)
      throw err;

    console.log(res);

    expect(res).toEqual(expect.anything());

    done();
  });
});

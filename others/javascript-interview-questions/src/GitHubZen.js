var req = require('request');

class GitHubZen {
  GetRandmonDesignPhilosophy(url, callback) {
    // Returning a sample directly, to avoid actually calling GitHub's API...
    return callback(null, 'Practicality beats purity.');

    req.get({
      url: url,
      headers: {
        'User-Agent': 'Node'
      },
      method: 'GET'
    }, (err, res, body) => {
      if (err) return callback(err, null);

      callback(null, body);
    });
  }
}

module.exports = GitHubZen;

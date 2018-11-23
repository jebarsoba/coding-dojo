var req = require('request');

class GitHubZen {
  GetRandmonDesignPhilosophy(url, callback) {
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

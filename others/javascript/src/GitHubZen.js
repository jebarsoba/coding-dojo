var req = require('request');

class GitHubZen {
  constructor(url) {
    this.url = url;
  }

  GetRandmonDesignPhilosophy(callback) {
    req.get({
      url: this.url,
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

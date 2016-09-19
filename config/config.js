var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'vauth'
    },
    port: process.env.PORT || 3009,
    db: 'mongodb://localhost/vauth-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'vauth'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/vauth-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'vauth'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/vauth-production'
  }
};

module.exports = config[env];

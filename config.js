'use strict';

var nconf = require('nconf');

nconf.env(['PORT', 'NODE_ENV'])
  .argv({
    'e': {
      alias: 'NODE_ENV',
      describe: 'Set production or development mode.',
      demand: false,
      default: 'development'
    },
    'p': {
      alias: 'PORT',
      describe: 'Port to run on.',
      demand: false,
      default: 3000
    },
    'n': {
      alias: "neo4j",
      describe: "Use local or remote neo4j instance",
      demand: false,
      // default: "local"
      default: "remote"
    }
  })
  .defaults({
    // 'USERNAME': process.env.MOVIE_DATABASE_USERNAME,
    // 'PASSWORD' : process.env.MOVIE_DATABASE_PASSWORD,
    'USERNAME': 'neo4j',
    'PASSWORD' : 'eggs',
    // 'neo4j': 'local',
    'neo4j': 'remote',
    'neo4j-local': 'bolt://localhost:7687',
    'neo4j-remote': 'bolt://178.128.211.174:7687',
    'base_url': 'http://localhost:3000',
    'api_path': '/api/v0'
  });

module.exports = nconf;

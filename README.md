Npm Check [![Build Status](https://travis-ci.org/ekonstantinidis/npm-check.svg?branch=master)](https://travis-ci.org/ekonstantinidis/npm-check)
=====================
Comparing NPM (dev)Dependencies.

### Prerequisites

 - ReactJS
 - NPM
 - Grunt

### Installation
You will need `http-server` installed globally to serve the website. If you encounter any issues with `npm install`, then run `ulimit -n 512`.

    npm install -g http-server
    npm install

### Development

    npm run watch
    npm run serve


### Tests (JsxHint)

    npm test


### Deployment
Travis CI does the job. For every commit on the `master` branch, Travis runs the builds and push to the `gh-pages` branch.

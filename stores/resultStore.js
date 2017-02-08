'use strict';

const Store = require('./Store');

class ResultStore extends Store{

  isOutdated(oldState) {
    return this.getState().updated > oldState
   }
}

module.exports = new ResultStore({
  results: [],
  updated: new Date()
})

const Viz = require('viz.js');
const {Module, render} = require('viz.js/full.render');

module.exports = function (config) {
  let viz = new Viz({Module, render});

  return async function (data, options) {
    return viz.renderString(data.text);
  }
}

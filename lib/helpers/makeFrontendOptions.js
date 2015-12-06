/**
 * @author rik
 */
var _ = require('lodash');
var frontendOptions = require('../constants/frontendOptions');

function makeFrontendOptions() {
  makeConfigOptions();
  makeApiOptions();
}

function makeConfigOptions() {
  frontendOptions.config.connections['sails-xhr'] = {
    // @fixme legend has it getBaseurl always returns localhost, even in production
    url: sails.getBaseurl(),
    adapter: 'XHR'
  }
}

function makeApiOptions() {
  makeModelOptions();
}

function makeModelOptions() {
  _.each(sails.models, function (obj) {
    frontendOptions.api.models[obj.identity] = {
      requests: makeRequestsForModel(obj.identity)
    };
  });
}

// @todo apply the effects sails config (routes, blueprints) to the generated frontend options
function makeRequestsForModel(modelName) {
  var requests = {};

  _.each(_.methods(sails.controllers[modelName]), function (method) {
    requests[method] = {
      route: '/' + modelName + '/' + method
    };
  });

  return requests;
}

module.exports = makeFrontendOptions;
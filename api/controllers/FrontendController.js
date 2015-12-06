/**
 * FrontendController
 *
 * @description :: Server-side logic for managing frontends
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var frontendOptions = require('../../lib/constants/frontendOptions');

module.exports = {

  describe: function (req, res) {
    res.send(frontendOptions);
  },

  policies: function (req, res) {
    // @todo implement policies method so that one or more server policies can be executed from the client with data
  }

};


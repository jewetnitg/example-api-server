/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {

  // this method will be available on app.models.user.server.testMethod3 on the frontend
  testMethod3: function (req, res) {
    res.send({
      firstName: 'test!'
    });
  }

};


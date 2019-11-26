var express = require("express");
var mysql = require("./sql");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  mysql.sql({
<<<<<<< HEAD:hell_Express/routes/api.js
    sql: `select * from one_login where id='${json.id}' and pass='${json.password}'`,
=======
    sql: `select * from two_homeTitleData`,
>>>>>>> e760c26cc4c6df708fd3abef3cbc8a5a4f3561c9:hell_Express/routes/home.js
    data(data) {
      if (data.length) {
        res.send({
          ok: 0,
          data: data
        });
      } else {
        res.send({
          ok: 1,
          data: ""
        });
      }
    }
  });
});

module.exports = router;

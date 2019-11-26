var express = require('express');
var mysql = require("./sql");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  const data = req.data;
  mysql.sql({
    sql: `select * from two_mingbi where type='${data.type}'`,
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

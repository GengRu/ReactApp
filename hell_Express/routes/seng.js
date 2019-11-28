var express = require("express");
var mysql = require("./sql");
var router = express.Router();

router.post("/", function(req, res, next) {
  mysql.sql({
    sql: `select * from two_seng`,
    data(data) {
      if (data.length) {
        res.send({
          ok: 0,
          data: data
        });
      } 
    }
  });
});
module.exports = router;
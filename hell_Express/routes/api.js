var express = require("express");
var mysql = require("./sql");
var router = express.Router();

router.get("/users", function(req, res, next) {
  var nums = [
    { id: 1, name: "张三" },
    { id: 2, name: "Mt" },
    { id: 3, name: "hello" }
  ];
  mysql.sql({
    sql: `select * from one_login`,
    arr: [],
    data(data) {
      res.send(data);
    }
  });
});

router.get("/loginIn", function(req, res, next) {
	res.send('777777');
});

module.exports = router;

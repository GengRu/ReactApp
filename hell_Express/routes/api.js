var express = require("express");
var mysql = require("./sql");
var router = express.Router();

router.get("/users", function(req, res, next) {
  var nums = [
    { id: 1, name: "张三" },
    { id: 2, name: "Mt" },
    { id: 3, name: "hello" }
  ];
  // res.send(nums)
  mysql.sql({
    sql: `select * from one_login`,
    arr: [],
    data(data) {
      res.send(data);
    }
  });
});

module.exports = router;

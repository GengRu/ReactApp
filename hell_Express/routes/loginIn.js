var express = require("express");
var mysql = require("./sql");
var router = express.Router();

// 登录
router.post("/", function(req, res, next) {
  var json = req.data;
  // 判断登陆
  mysql.sql({
    sql: `select * from one_user where id='${json.id}' and pass='${json.password}'`,
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

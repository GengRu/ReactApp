var express = require("express");
var mysql = require("./sql");
var router = express.Router();

// 登录
router.post("/loginIn", function(req, res, next) {
  var json = req.data;
  // 判断登陆
  mysql.sql({
    sql: `select * from one_login where id=${json.id} and pass='${json.password}'`,
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

router.get("/loginIn", function(req, res, next) {
	res.send('777777');
});

module.exports = router;

var express = require("express");
var mysql = require("./sql");
var router = express.Router();

<<<<<<< HEAD
/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
=======
// 登录
router.post("/", function(req, res, next) {
  var json = req.data;
  // 判断登陆
  mysql.sql({
    sql: `select * from two_user where id='${json.id}' and pass='${json.password}'`,
    data(data) {
      if (data.length) {
        // delete data.password
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
>>>>>>> e760c26cc4c6df708fd3abef3cbc8a5a4f3561c9
});

module.exports = router;

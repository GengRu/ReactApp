var express = require("express");
var mysql = require("./sql");
var router = express.Router();


router.post("/loginIn", function(req, res, next) {
	var zhi = req.body
	mysql.sql({
	  sql: `select * from one_login where user='${zhi.user}' and pass='${zhi.password}'`,
	  data(data) {
		if(data != ''){
			res.send('登录成功')
		}else{
			res.send('登录失败')
		}
	  }
	});
	
	
});

module.exports = router;

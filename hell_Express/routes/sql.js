var mysql = require('mysql');
var pool = mysql.createPool({
    host: '152.136.113.170',
    user: 'h5_1812',
    password: 'db!H51812@tx',
    database: 'H5_1812',
    port: 3306,
});

module.exports = {
    sql(json) {
        pool.getConnection((err, connection) => {
            if (err) {
                console.log(err);
                return;
            }
            var sql = json.sql;
            connection.query(sql, json.arr, (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }
                json.data(data);
                connection.release();
            });
        });
    }
}
var mysql = require("mysql2");
var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "task",
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;

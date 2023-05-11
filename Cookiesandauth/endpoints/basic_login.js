const mysql = require("mysql2");

module.exports = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  var sql = mysql.format(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password]
  );
  console.log("DEBUG: /basic/login => " + sql);
  connection.query(sql, (err, rows) => {
    if (err) {
      return res.json({
        success: false,
        data: null,
        error: err.message,
      });
    }

    numRows = rows.length;
    if (numRows == 0) {
      res.json({
        success: false,
        message: "Login credential is incorrect",
      });
    } else {
      res.json({
        success: true,
        message: "Login credential is correct",
        user: rows[0],
      });
    }
  });
};

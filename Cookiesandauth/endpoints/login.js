const mysql = require("mysql2");
const bcrypt = require("bcrypt");


module.exports = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  var sql = mysql.format("SELECT * FROM users WHERE username = ?", [username]);
  console.log("DEBUG: /login => " + sql);

  connection.query(sql, async (err, rows) => {
    if (err) {
      return res.json({
        success: false,
        data: null,
        error: err.message,
      });
    }

    rowsLength = rows.length;
    if (rowsLength == 0) {
      res.json({
        success: false,
        message: "Username Not found",
      });
    } else {
      const validPass = await bcrypt.compare(password, rows[0].hashed_password);
      console.log(validPass);
      if (!validPass) {
        res.json({
          success: false,
          message: "Password Incorrect",
        });
      } else {
        res.json({
          success: true,
          message: "Authentication Successed",
        });
      }
    }
  });
};

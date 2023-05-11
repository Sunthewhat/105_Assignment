const mysql = require("mysql2");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

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
      if (!validPass) {
        res.json({
          success: true,
          message: "Password Incorrect",
        });
      } else {
        const login_token = jwt.sign(
          {
            userId: rows[0].id,
          },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "7d" }
        );
        // console.log(process.env.JWT_SECRET_KEY);
        const key =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImlhdCI6MTY4MzUzNjIyMiwiZXhwIjoxNjg0MTQxMDIyfQ.yxL9LYQuF8gvOMMBaKHe5EzTM94_ns9Aew_6laHHv5A";
        const decodeed = jwt.verify(key, process.env.JWT_SECRET_KEY);
        console.log(decodeed);
        res.cookie("user", login_token);
        res.json({
          success: true,
          message: "Authentication Successed",
        });
      }
    }
  });
};

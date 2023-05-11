const jwt = require("jsonwebtoken");
const mysql = require("mysql2");

module.exports = (req, res) => {
  const token = req.cookies.user;
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  //   console.log(decoded);
  var sql = mysql.format("SELECT * FROM items WHERE owner_id = ?", [
    decoded.userId,
  ]);
  console.log("Debug /todo/all => " + sql);
  connection.query(sql, (err, rows) => {
    // Check if cannot find the data in the database then return the error
    if (err) {
      res.json({
        success: false,
        data: null,
        error: err.message,
      });
    } else {
      // Return data to the client if success
      return res.json({
        success: true,
        data: rows,
        error: null,
      });
    }
  });
};

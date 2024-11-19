const connection = require("../../config/db");
const responseStructure = require("../../utils/responseStructure");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body.insertObject;

    var selectEmail =
      `SELECT user.username  FROM user WHERE email = "` + email + `"`;

    connection.query(selectEmail, async (err, results) => {
      if (results && results[0]) {
        let responseMessage = responseStructure.errorResponse(
          "user already exsist"
        );
        res.send(responseMessage);
      } else {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        var insertSql =
          `INSERT INTO  user (username, email, password,role) VALUES ("` +
          username +
          `","` +
          email +
          `","` +
          hashedPassword +
          `","` +
          role +
          `")`;

        connection.query(insertSql, async (err, result) => {
          if (result) {
            let responseMessage = responseStructure.successResponse(
              "User Register Successfully"
            );
            res.send(responseMessage);
          } else {
            let responseMessage = responseStructure.errorResponse(
              "Error In Register User"
            );
            res.send(responseMessage);
          }
        });
      }
    });
  } catch (error) {}
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body.insertObject;

    var selectUser =
      `SELECT user.username,user.password,user.userId,user.role from user where user.email = "` +
      email +
      `"`;
    console.log(selectUser);
    connection.query(selectUser, async (err, result) => {
      if (result && result[0]) {
        const { userId, username, password: hashedPassword } = result[0];

        const isPasswordValid = await bcrypt.compare(password, hashedPassword);

        if (isPasswordValid) {
          let responseMessage = responseStructure.successResponse({
            message: "Login Successfully",
            user: result[0],
          });
          res.send(responseMessage);
        } else {
          let responseMessage = responseStructure.errorResponse(
            "Check  your Password"
          );
          res.send(responseMessage);
        }
      } else {
        let responseMessage = responseStructure.errorResponse(
          "Check Username and Password"
        );
        res.send(responseMessage);
      }
    });
  } catch (error) {}
};

module.exports = { register, login };

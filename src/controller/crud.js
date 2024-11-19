const responseStructure = require("../../utils/responseStructure");
const db = require("../../src/models/index");
const { Sequelize, sequelize } = require("sequelize");
const connection = require("../../config/db");

// Create a new user
const createUser = async (req, res) => {
  try {
    const table = req.body.dbName;
    const { username, email, password } = req.body.insertObject;
    var insertSql =
      `INSERT INTO ` +
      table +
      ` (username, email, password) VALUES ("` +
      username +
      `","` +
      email +
      `","` +
      password +
      `")`;
    connection.query(insertSql, async (err, result) => {
      if (error) {
        responseMessage = responseStructure.errorResponse(
          "Error in create data"
        );
        res.send(responseMessage);
      } else {
        responseMessage = responseStructure.successResponse(
          "Successfully inserted value"
        );
        res.send(responseMessage);
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const readUser = async (req, res) => {
  try {
    const id = req.body.id;

    var selectUser =
      `SELECT user.userId,user.username,user.email,user.password,user.role FROM user WHERE user.userId = ` +
      id +
      ``;

    connection.query(selectUser, async (err, result) => {
      if (result) {
        responseMessage = responseStructure.successResponse({
          data: result[0],
        });
        res.send(responseMessage);
      } else {
        responseMessage = responseStructure.successResponse({
          message: "Data retrieved successfully",
          data: result,
        });
        res.send(responseMessage);
      }
    });
  } catch (error) {}
};

const readRequests = async (req, res) => {
  let responseMessage;
  try {
    const sql = "SELECT * FROM user";
    connection.query(sql, async (err, result) => {
      if (err) {
        responseMessage = responseStructure.errorResponse(
          "Error in read Request"
        );
        res.send(responseMessage);
      } else {
        responseMessage = responseStructure.successResponse({
          message: "Data retrieved successfully",
          data: result,
          length: result.length,
        });
        res.send(responseMessage);
      }
    });
  } catch (error) {
    responseMessage = responseStructure.errorResponse("Error in reading datas");
    res.send(responseMessage);
  }
};

const updateRequests = async (req, res) => {
  let responseMessage;
  try {
    const Id = req.body.id;
    const { username, email, password, role } = req.body.updateObject;

    const updatesql =
      `UPDATE user SET user.username = '` +
      username +
      `',user.email='` +
      email +
      `',
              user.password='` +
      password +
      `',user.role ='` +
      role +
      `'
    WHERE user.userId = ` +
      Id +
      ``;
    connection.query(updatesql, async (err, result) => {
      if (result) {
        responseMessage = responseStructure.successResponse({
          message: "Successfully update the value",
          length: result,
        });
        res.send(responseMessage);
      } else {
        responseMessage = responseStructure.errorResponse("Error in updation");
        res.send(responseMessage);
      }
    });
  } catch (error) {
    responseMessage = responseStructure.errorResponse("Error in editing");
    res.send(responseMessage);
  }
};

const deleteRequest = async (req, res) => {
  let responseMessage;
  try {
    const Id = req.body.id;
    const sql = `DELETE FROM user WHERE user.userId = ` + Id + ``;
    connection.query(sql, async (err, result) => {
      if (result.affectedRows === 1) {
        responseMessage = responseStructure.successResponse({
          message: "data was deleted Successfully",
          result,
        });
        res.send(responseMessage);
      } else {
        responseMessage = responseStructure.errorResponse({
          message: "unable to find Id",
          data: null,
        });
        res.send(responseMessage);
      }
    });
  } catch (error) {
    responseMessage = responseStructure.errorResponse("Error in deletion");
    res.send(responseMessage);
  }
};

module.exports = {
  createUser,
  readUser,
  readRequests,
  updateRequests,
  deleteRequest,
};

const express = require("express");
const crudController = require("../controller/crud");
const userController = require("../controller/user.controller");

const router = express.Router();

router.post("/insertrequests", crudController.createUser);

router.post("/readrequests", crudController.readRequests);

router.post("/readsinglerequests", crudController.readUser);

router.post("/editrequest", crudController.updateRequests);

router.post("/deleterequest", crudController.deleteRequest);

router.post("/register", userController.register);

router.post("/login", userController.login);

module.exports = router;

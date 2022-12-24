const fs = require("fs");
const express = require("express");
const bcrypt = require("bcrypt");
const rejester = require("../controllers/rejisterController");
const login = require("../controllers/loginController");
const router = express.Router();

router
  .get("/rejester", rejester.getRejester)
  .post("/rejester", rejester.postRejester);

router.get("/login", login.getLogin);

router.get("/", (req, res) => {
  res.redirect("/login");
});

router
  .get("/profile", (req, res) => {
    res.redirect("/login");
  })
  .post("/profile", login.postLogin);

module.exports = router;

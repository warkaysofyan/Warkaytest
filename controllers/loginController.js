const fs = require("fs");
const bycrypt = require("bcrypt");
const expressSession = require("express");
exports.getLogin = (req, res) => {
  res.render("login", { data: req.body.email });
};
exports.postLogin = async (req, res) => {
  let myinfo = await req.body;
  fs.readFile("./public/fusers.json", "utf-8", async (err, data) => {
    let pd = JSON.parse(data);

    let person = pd.find((el) => el.email == myinfo.email);
    if (person != null) {
      let ispassed = await bycrypt.compare(req.body.password, person.password);
      if (ispassed) {
        res.render("profile", { data: person });
      } else {
        res.render("login", { data: req.body.email });
      }
    }
  });
};

const bcrypt = require("bcrypt");
const fs = require("fs");
exports.getRejester = (req, res) => {
  res.render("rejester", { IV: "", formData: req.body });
};
exports.postRejester = async (req, res) => {
  //console.log(req.body)
  try {
    const salt = await bcrypt.genSalt();
    const hashedpassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedpassword;

    fs.readFile("./public/fusers.json", "utf-8", (err, data) => {
      if (err) console.log("erroe reading the file");
      else {
        let d1 = JSON.parse(data);
        let isValidUser = true;
        let invalidValue;
        d1.forEach((el) => {
          if (el.email === req.body.email) {
            isValidUser = false;
            invalidValue = "email";
          } else if (el.phone === req.body.phone) {
            isValidUser = false;
            invalidValue = "phone";
          }
        });
        if (isValidUser) {
          req.body.id = parseInt(d1[d1.length - 1].id) + 1;

          d1.push(req.body);
          let d = JSON.stringify(d1);

          fs.writeFile("./public/fusers.json", d, (err) => {
            console.log(err);
          });
          res.redirect("/login");
        } else {
          res.render("rejester", { IV: invalidValue, formData: req.body });
        }
      }
    });
  } catch (err) {
    console.log(err);
  }
};

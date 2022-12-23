//requare######################################################
const express = require("express");
let bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
// Static Files
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
const userRouter = require("./routes/users");
//EJS view engin

app.set("view engine", "ejs");

// Routes

app.use(morgan(" dev "));
app.use("/", userRouter);

app.use((req, res, next) => {
  res.render("404");
});

// Server set-up

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app starting on ${port}
  
follow the link http://127.0.0.1:${port}`);
});

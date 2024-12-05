const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

const users = require("./routes/user.js");
const posts = require("./routes/post.js");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.listen(3000, () => {
  console.log("server is listing on port 3000");
});

const sessionOptions = {
  secret: "mysupersecretecode",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
  res.locals.messages = req.flash("msg");
  next();
});

app.get("/register", (req, res) => {
  let { name = "unknown" } = req.query;
  req.session.name = name;

  if (name === "unknown") {
    req.flash("msg", "User not registerd!!");
  } else {
    req.flash("msg", "User registerd successfully!");
  }
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.render("page.ejs", { name: req.session.name });
});

// app.get("/test", (req, res) => {
//   res.send("test successfull");
// });

// app.get("/reqcount", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }

//   res.send(`You send a requset ${req.session.count} times`);
// });

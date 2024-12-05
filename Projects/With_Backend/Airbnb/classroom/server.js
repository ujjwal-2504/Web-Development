const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");

app.listen(3000, () => {
  console.log("server is listing on port 3000");
});

app.use(cookieParser("secretcode"));

app.get("/", (req, res) => {
  res.send("Hii I am root");
  console.dir(req.cookies);
});

app.use("/users", users);
app.use("/posts", posts);

app.get("/getcookies", (req, res) => {
  res.cookie("greet", "namaste");
  res.cookie("madeIn", "India");
  res.send("Send you some cookies");
});

app.get("/greet", (req, res) => {
  let { name = "anonymous", greet = "Hii" } = req.cookies;
  res.send(`${greet}, ${name}`);
});

app.get("/getsignedcookie", (req, res) => {
  res.cookie("made-in", "India", { signed: true });
  res.send("Singed cookie sent");
});

app.get("/verify", (req, res) => {
  console.log(req.signedCookies);
  console.log(req.cookies);
  res.send("verified");
});

const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Temporary routes (UI only)
app.get("/", (req, res) => {
  res.render("user/home");
});

app.get("/login", (req, res) => {
  res.render("auth/login");
});

app.get("/register", (req, res) => {
  res.render("auth/register");
});

app.get("/admin/dashboard", (req, res) => {
  res.render("admin/dashboard");
});

app.listen(5000, () => console.log("Server running on port 5000"));
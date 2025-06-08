// Express => Nodejsda web serverlarni quradigan framework.

console.log("Web Serverni boshladik");
const express = require("express");
const app = express(); // expressni App objectini yaratdik
const fs = require("fs");

// MONGODB chaqirish

const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1 KIRISH Code:

app.use(express.static("public")); // browser expressga request qilayotganda public folderni clientlarga ochib beramiz
app.use(express.json()); // kirib kelayotgan json formatdagi datani object holatiga o'girib beradi
app.use(express.urlencoded({ extended: true })); //htmldagi formdan nimanidir post qilsak express qabul qivoladi

// 2  Session Code:

// 3  VIEW Code:  Backendda view yasash (view clientga yuboriladi, html orqali yasaladi)
app.set("views", "views"); //view degan folderni korsatadi
app.set("view engine", "ejs"); // viewni yasash ejs orqali

// 4 ROUTING Code:

////test
// app.get("/hello", function (req, res) {
//   res.end(`<h1 style="background: red">Hello World by Justin</h1>`);
// });

// app.get("/gift", function (req, res) {
//   res.end(`<h1 style="background: red">Siz sovgalar bolimidasiz</h1>`);
// });

app.post("/create-item", (req, res) => {
  console.log(req);
  res.json({ test: "success" });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  res.render("reja");
});

module.exports = app;

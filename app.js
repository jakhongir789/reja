// Express => Nodejsda web serverlarni quradigan framework.

console.log("Web Serverni boshladik");
const res = require("express/lib/response");
const express = require("express");

const app = express(); // expressni App objectini yaratdik
const fs = require("fs");

// MONGODB chaqirish

const db = require("./server").db();
const mongodb = require("mongodb");

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

app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");

  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;

  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "hamma rejalar o'chirildi" });
    });
  }
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;

// 4 ROUTING Code: "shunchaki saqlab qoyildi"

////test
// app.get("/hello", function (req, res) {
//   res.end(`<h1 style="background: red">Hello World by Justin</h1>`);
// });

// app.get("/gift", function (req, res) {
//   res.end(`<h1 style="background: red">Siz sovgalar bolimidasiz</h1>`);
// });

// app.get("/author", (req, res) => {
//   res.render("author", { user: user });
// });

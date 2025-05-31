console.log("Web Serverni boshladik");
const express = require("express");
const app = express(); // expressni App objectini yaratdik
const http = require("http");

// 1 KIRISH Code:

app.use(express.static("public")); // browser expressga request qilayotganda public folderni clientlarga ochib beramiz
app.use(express.json()); // kirib kelayotgan json formatdagi datani object holatiga o'girib beradi
app.use(express.urlencoded({ extended: true })); //htmldagi formdan nimanidir post qilsak express qabul qivoladi

// 2  Session Code:

// 3  VIEW Code:  Backendda view yasash (view clientga yuboriladi, html orqali yasaladi)
app.set("views", "views"); //view degan folderni korsatadi
app.set("view engine", "ejs"); // viewni yasash ejs orqali

// 4 ROUTING Code:
app.get("/hello", function (req, res) {
  res.end(`<h1 style="background: red">Hello World by Justin</h1>`);
});

app.get("/gift", function (req, res) {
  res.end(`<h1 style="background: red">Siz sovgalar bolimidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});

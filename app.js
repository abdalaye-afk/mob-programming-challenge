// console.log("hello world !");

require("dotenv").config();

require("./config/mongodb.js");

const express = require("express");

const hbs =require("hbs");

const app= express();

const path=require ("path");

const dev_mode=true;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("views", (path.join(__dirname,"/views")));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");






app.use(require("./routes/index"))



app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`)
});





module.exports = app.js
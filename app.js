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

const a = [{
    name: "hamidou",
    email: "hamidou@hotmail.fr",
    favoriteLangage: "js"
}];

const b = ["./public/assets/img/fabian-grohs-oZ61KFUQsus-unsplash.jpg",
    "./public/assets/img/procreator-ux-design-studio-VzJjPuk53sk-unsplash.jpg",
    "./public/assets/img/steve-halama-Yhc7YGZlz3g-unsplash.jpg"
];

app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`)
});

app.get("/", (req,res)=>{
    res.render("layout")
})


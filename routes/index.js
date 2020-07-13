const express = require("express");
const router = express.Router();

const b = ["./public/assets/img/fabian-grohs-oZ61KFUQsus-unsplash.jpg",
    "./public/assets/img/procreator-ux-design-studio-VzJjPuk53sk-unsplash.jpg",
    "./public/assets/img/steve-halama-Yhc7YGZlz3g-unsplash.jpg"
];


const a = [{
  name: "hamidou",
  email: "hamidou@hotmail.fr",
  favoriteLangage: "js"
}];

router.get("/", (req,res)=>{
  res.render("home",{b} )
});


router.get("/all-simploniens", (req,res)=>{
  res.render("allUsers",{a})
});


router.get("/add-simploniens", (req,res)=>{
  res.render("formUser")
});


router.get("/api/simploniens", (req,res)=>{
  res.json("users")
});
  

module.exports = router;

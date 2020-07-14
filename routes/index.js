const express = require("express");
const router = express.Router();
const userModel=require("../models/user.js")

const b = [
  "assets/img/fabian-grohs-oZ61KFUQsus-unsplash.jpg",
  "assets/img/procreator-ux-design-studio-VzJjPuk53sk-unsplash.jpg",
  "assets/img/steve-halama-Yhc7YGZlz3g-unsplash.jpg"
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
  userModel.find()
  .then(dbres => {
    res.render("allUsers",{a :dbres} )
  })
  
 
});





router.get("/add-simploniens", (req,res)=>{
  res.render("formUser")
});


router.post("/ajout", (req,res) => {

  userModel.create(req.body)
  .then(dbres => {
    res.render("home");
  })
.catch(dbrerror=>console.error(dbrerror));
})

router.get("/api/simploniens", (req,res)=>{
  res.json("users")
});
 

router.get("/detail/:id",(req,res)=>{
  console.log(req.params.id);
userModel.findById(req.params.id)
.then(dbres=>{
  res.render("detailUser",{user:dbres})
})
})

router.get("/delete/:id",(req,res)=>{
  console.log(req.params.id);
userModel.findByIdAndDelete(req.params.id)
.then(dbres=>{
  res.render("allUsers")
})
})

router.get("/edit/:id",(req,res)=>{
  
  userModel.findById(req.params.id)
  .then(dbres=>{
    console.log(dbres)
  res.render("editeUser",{user:dbres})
  
})
})

router.post("/confirmeEdit/:id",(req,res)=>{
  
  userModel.findByIdAndUpdate(req.params.id,req.body)
  
  .then(dbres=>{
    console.log(dbres)
    res.render('allUsers')
  })
})

module.exports = router;

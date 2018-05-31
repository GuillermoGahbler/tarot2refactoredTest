const router = require("express").Router();
global.Promise=require("bluebird");
const passport = require("./passport");
const path = require("path");
const Cards = require("./models").cards;
const Types = require("./models").types;
const Numbers = require("./models").numbers;
const Suits = require("./models").suits;
const Readings = require("./models").readings;
const Users = require("./models").users;

router

  .get("/",(req,res,next)=>{
    res.render("index",{
      logged: req.signedCookies.isLoggedIN, 
      name: req.cookies.name
    });
  })


  .get("/users/:id",(req,res,next)=>{
    Promise.all([
      Users.findById(req.params.id),
      Readings.findAll({where:{user_id:req.params.id}})
    ])
    .then(data=>{
      const results = {user: data[0], readings: data[1]}
      res
        .cookie("name",results.user.username,{maxAge:1000* 60 * 60 * 10})
        .render("index",{
          ...results,
          logged: req.signedCookies.isLoggedIN,
          name: results.user.username
        })
    })
  })


  .get("/auth/google",passport.authenticate('google',{
    scope: ['profile','email']
  }))


  .get("/auth/google/callback",
  passport.authenticate('google',{failureRedirect: "/"}),
  (req,res,next) => {
    const id = req.user.user.dataValues.id
    res
      .cookie('isLoggedIN',true, {signed: true, maxAge: 1000 * 60 * 60* 10})
      .cookie('id', id, {signed: true, maxAge: 1000 * 60 * 60 * 10})
      .redirect(`/users/${id}`)
  })


  .get("/auth/twitter",passport.authenticate('twitter',{
    scope:['profile','email']
  }))


  .get("/auth/twitter/callback",
  passport.authenticate('twitter',{failureRedirect: "/"}),
  (req,res,next)=>{
    const id = req.user.user.dataValues.id
    res
      .cookie('isLoggedIN',true, {signed: true, maxAge: 1000 * 60 * 60* 10})
      .cookie('id',id, {signed: true, maxAge: 1000 * 60 * 60 * 10})
      .redirect(`/users/${id}`)
  })


  .get("/choices", function(req, res) {
    res.render('choices',{
      logged: req.signedCookies.isLoggedIN,
      name: req.cookies.name
    });
  })


  .get("/spread", function(req, res) {
    res.render('spread',{
      isSpread: true,
      logged: req.signedCookies.isLoggedIN,
      name: req.cookies.name
    });
  })


  .get("/api/cards/", function (req, res) {
    const arr = req.query.ids.split(",").map(ele=>parseInt(ele));
    Cards.findAll({ include: [Types, Numbers, Suits] })
    .then(results=> arr.map(reqId => results.find(r => r.id === reqId)))
    .then(data=>{
      if(req.signedCookies.isLoggedIN && req.signedCookies.id){
        Readings.create({
          user_id: req.signedCookies.id,
          reading: req.query.ids })
      }
      res.json(data)
    })
  })


.get("/api/positions/:id/", function (req, res) {
    var id = req.params.id;
    Positions.findById(id).then(function (result) {
        res.json(result);
    });
});


module.exports = router;
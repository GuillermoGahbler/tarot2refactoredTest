if(!process.env.PORT){
  require('dotenv').config();
}
const exph = require('express-handlebars');
const path = require('path');
const models = require("./models").sequelize;
const Port = process.env.PORT || 3000;
const passport = require("./passport");
const routes = require("./routes");
const express = require('express');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const webServer = express();

webServer
  .engine("handlebars",exph({defaultLayout: 'main.handlebars'}))
  .set("view engine", 'handlebars')
  .use(expressSession({
    secret: 'keyboard cat' ,
    resave: true,
    saveUninitialized:true
  }))
  .use(cookieParser('cookieMonster'))
  .use(passport.initialize())
  .use(passport.session())
  .use(express.static(path.join(__dirname,"public")))
  .use(routes)

  models.sync().then(()=>{
    webServer.listen(Port,()=>{
      if(!process.env.PORT){
        console.log(`Server is running on http://localhost:${Port}`);
      }
    })
  })
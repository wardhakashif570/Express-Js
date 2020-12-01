const path=require("path");
const express = require("express");
const app = express();
const hbs=require("hbs");
var requests = require("requests");
const port = 8000;

const staticPath=path.join(__dirname,"../public");
const tempath=path.join(__dirname,"../templates/views")
const parlpath=path.join(__dirname,"../templates/partials");
//to set the view engine
app.set("view engine", "hbs");
app.set('views',tempath);
hbs.registerPartials(parlpath);


//builtin miiddleware
app.use(express.static(staticPath));

// template engine route
app.get("/",(req,res)=>{
res.render("index");
CustomerOrder:"Order"
});

app.get("/about",(req,res)=>{
  // res.render("about");
  requests(
    `http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`
  )
    .on("data", (chunk) => {
      const objdata = JSON.parse(chunk);
      const arrData = [objdata];
     // console.log(arrData[0].main.temp);
      // const realTimeData = arrData
      //   .map((val) => replaceVal(homeFile, val))
      //   .join("");
      res.write(arrData[0].name);
      // console.log(realTimeData);
    })
    .on("end", (err) => {
      if (err) return console.log("connection closed due to errors", err);
      res.end();
    });

  });
  app.get("/about/*", (req, res) => {
    res.render('404',{
      errorcomment:"Opps this about page is not Found"
    });
    
  });

  
app.get('*', (req, res) => {
    res.render('404',{
      errorcomment:"Opps page is not Found"
    });
    
  });
  
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });
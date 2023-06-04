var express = require("express");
var bodyParser = require("body-parser");
var getDate = require(__dirname + "/date.js")
var app = express();
var items = ["Buy food", "Cook food", "Eat food"];
var worklist = [];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get("/", function (req, res) {
  var day = getDate.day();

  res.render("list", { workName: day, newItems: items });
});

app.post("/", (req, res) => {
  var item = req.body.newItem;
  if (req.body.name==="Work")
  {
    worklist.push(item);
    res.redirect("/work");

  }else{
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work",(req,res)=>{
  res.render("list", {workName: "Work",  newItems: worklist})
})
app.get("/about",(req,res)=>{
  res.render("about");
})

app.listen(3000, function (req, res) {
  console.log("server running port 3000");
});

const express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) =>{
  // res.send('<h1>hello Express</h1>')
  res.send({
    name: 'Dan',
    likes: [
      "biking",
      "cities"
    ]



  })


})

app.get('/about', (req,res) => {
  res.send('<h1> About Page </h1>')
})

app.get('/bad', (req,res) => {
  res.send({
    errorMessage: "Incorrect URL"
  })
})

app.listen(3000, () => console.log("Server running on port 3000"));

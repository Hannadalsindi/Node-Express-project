const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render("index")
})


mongoose.connect("mongodb+srv://hannadalsindi:0546090687@cluster0.xnqsn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
  app.listen(port, () => {
    console.log('http://localhost:${port}');
  });
})
.catch((err) => {
  console.log(err);
});

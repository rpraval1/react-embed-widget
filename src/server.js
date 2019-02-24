const path = require('path')

console.log("Current Dir: ")
console.log(path.resolve(__dirname, "../dist"))

var express = require('express'),
app = express(); 

app.use('/dist', express.static(path.resolve(__dirname, "../dist")))
app.use('/', express.static(path.resolve(__dirname, "../examples")));

app.listen(8081);

module.exports = app
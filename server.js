var express = require('express')
var path = require('path')
var serverStatic = require('server-static')

var app = express() 
app.use(ServerStatic(path.join(__dirname, 'dist')))

var port = process.env.PORT || 5000
app.listen(port)
console.log('Server started' + port)  
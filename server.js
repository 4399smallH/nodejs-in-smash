var http = require("http")
var app = http.createServer(function(req,res) {
  res.writeHead(200,{"Content-Type": "text/plain"})
  res.end("hello world")
})
//启动服务
var server = app.listen(3000, function() {
  console.log('Server listening at http://' + server.address().address + ':' + 
              server.address().port)
})
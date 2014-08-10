var os = require('os')
  , http = require('http')

var start = new Date()

function secondsSince(when) {
  return (new Date() - when) / 1000
}

function uptime() {
  return '' + secondsSince(start)
}

http.createServer(function(req, res) {
  var body = os.hostname() + ' has been up for ' + uptime() + 's.'

  res.writeHead(200, {
    'Content-Type' : 'text/plain'
  , 'Content-Length' : body.length
  })

  res.end(body)
}).on('error', function(err){
  console.log('error: ' + err)
}).listen(8080)


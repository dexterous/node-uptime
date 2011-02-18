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
  res.end(os.hostname() + " has been up for " + uptime())
}).listen(80)


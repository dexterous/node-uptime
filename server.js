var os = require('os')
  , http = require('http')

http.createServer(function(req, res) {
  res.end(os.hostname + " has been up for " + os.uptime)
}).listen(80)


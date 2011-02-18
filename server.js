var os = require('os')
  , http = require('http')

var start = new Date()

http.createServer(function(req, res) {
  res.end(os.hostname() + " has been up for " + new Date() - start)
}).listen(80)


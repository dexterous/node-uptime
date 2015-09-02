var os   = require('os')
  , http = require('http')

var start    = new Date()
  , hostname = os.hostname()

function secondsSince(when) {
  return (new Date() - when) / 1000
}

function uptime() {
  return '' + secondsSince(start)
}

http.createServer(function(req, res) {
  var body = hostname + ' has been up for ' + uptime() + 's.'

  res.writeHead(200, {
    'Content-Type' : 'text/plain'
  , 'Content-Length' : body.length
  })

  res.end(body)
}).on('error', function(err){
  console.log('error: ' + err)
}).listen(process.env.PORT || 8080)

console.log('Server listening on port 8080, press <C-c> to stop.')

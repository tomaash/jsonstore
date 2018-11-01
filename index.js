var express = require('express')
var cors = require('cors')
var compression = require('compression')

var app = express()

app.use(cors())
app.use(compression())
app.use(express.static('.'))

const port = process.env.PORT || 4444

app.listen(port, function () {
  console.log('CORS-enabled web server listening on port ' + port)
})

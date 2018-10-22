var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.use(express.static('.'))

// app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })

app.listen(process.env.PORT, function () {
  console.log('CORS-enabled web server listening on port ' + process.env.PORT)
})

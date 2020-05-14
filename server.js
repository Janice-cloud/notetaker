
const express = require('express')
const bodyParser = require('body-parser')

const app = express() 
const PORT = process.env.PORT || 3000 


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

require('/public/routes/api.js')(app)
require('/public/routes/html.js')(app)


app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT)
})

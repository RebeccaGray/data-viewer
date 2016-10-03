'use strict'
var express = require('express')
var PORT = process.env.PORT || 8000
var bodyParser = require('body-parser')
var Promise = require('bluebird')
// Configure
Promise.config({
  longStackTraces: true,
  warnings: true // note, run node with --trace-warnings to see full stack traces for warnings
})

var app = express()
app.use(bodyParser.json())

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT)
})

var readFile = Promise.promisify(require('fs').readFile)

app.get('/data/:filename?', function (req, res) {
  console.log('server')
  var filename = req.params.filename + '.json'
  console.log('filename', filename)
  readFile(filename, 'utf8').then(function (contents) {
    return eval(contents)
  }).then(function (result) {
    res.status(200).send(JSON.stringify(result))
  }).catch(SyntaxError, function (e) {
    console.log('File had syntax error', e)
    // Catch any other error
  }).catch(function (e) {
    console.log('Error reading file', e)
  })
})

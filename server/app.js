const express = require('express')
const bodyParser = require('body-parser')
const compile = require('./compile')
const cors = require('cors')
const app = express()

// app.use(cors());
app.use(bodyParser.json())

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST')
  res.header('Content-Type', 'application/json;charset=utf-8')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
  next()
})

app.post('/compile', (req, res) => {
  const { filename, fileJSON } = req.body
  console.log(filename, fileJSON)

  try {
    compile(filename, fileJSON)
  } catch (error) {
    res.json({
      code: 1,
      msg: error
    })
  }

  // res.json({
  //   code: 0,
  //   msg: "ok"
  // })
})

app.listen(3000, () => {
  console.log('Server is running' + 3000)
})

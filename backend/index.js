const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({
    name: 'kshitiij',
    address: 'kathmandu'
  })
})

app.get('/about', (req, res) => {
    res.send({
      page: 'about',
      message: 'hello world'
    })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
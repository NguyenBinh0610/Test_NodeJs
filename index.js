const express = require('express')
const app = express()
const port = 3000

app.get('/Trang-chu', (req, res) => {
  res.send('Come On Man!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')

var app = express()

var router = require('./apiRouter')





app.get ('/', (req,res)=>{
    res.send('Start Working with NODEJS by Nguyen Van Thanh Duc , ID:18520616')
})

app.use('/home',router)
app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
  })

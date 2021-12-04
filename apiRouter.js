const express = require('express')
var router = express.Router()

router.get('/',(req,res)=>{
    res.send('Home')
})

router.get('/shop',(req,res)=>{
    res.send('This is SHOP')
})

router.get('/cart',(req,res)=>{
    res.send('This is CART')
})



module.exports = router 
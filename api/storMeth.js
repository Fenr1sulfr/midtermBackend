const express = require('express')
const router=express()
const dataStore = require('./store')

router.get('/check',(req,res)=>{
    res.json({answer:dataStore})
})
router.delete('/check',(req,res)=>{
    dataStore=[]
})

module.exports=router
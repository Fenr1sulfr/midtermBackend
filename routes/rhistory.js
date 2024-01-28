// server/dataStore.js
const express = require('express')
const path =require('path')
const router=express()

router.get('/history',(req,res)=>{
    const indexPath = path.resolve(__dirname, '../views/history.html');
    res.sendFile(indexPath)
})

module.exports =router

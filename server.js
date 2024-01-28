const express = require('express')
const app =  express()
const cors = require('cors')
const port=3000
// In server.js

app.use(cors())
app.use(express.json());
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
const rhistory=require('./routes/rhistory')
const homeRoute=require('./routes/rhome')
const calRoute=require('./routes/travel')
const apiCall=require(`./api/news`)
const apiHistory=require('./api/storMeth')
const apiNews=require('./api/main')
const apiWeather=require('./api/weather')
app.use('/',homeRoute)
app.use('/',apiNews)
app.use('/',apiWeather)
app.use('/travel', calRoute);
app.use('/travel', apiCall);
app.use('/travel',rhistory)
app.use('/travel',apiHistory)

app.listen(port,()=>{
    console.log(`Server is on now, port ${port}`)
})
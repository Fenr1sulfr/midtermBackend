const express = require('express')
const router = express.Router()
const axios=require('axios')

router.get('/weather',async (req,res)=>{
    try{
        const apiKey='6f4071cea07c469996982606241901'
        const city = req.query.city||"Rudny"
        const response  =await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
        const weatherData={
            location:response.data.location.name,
            temperature:response.data.current.temp_c,
            condition:response.data.current.condition.text,
        }
        res.json(weatherData);
    }   
    catch(error){
        console.log('Error',error.message)
        res.status(500).json({error:"Internal server error"})
    }
})
module.exports=router
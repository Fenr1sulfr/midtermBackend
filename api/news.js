const express =require("express")
const router = express.Router()
const store=require('./store')
const{
  isBefore,
  isDate,
  escape,
}=require('validator')
const airportsMap = {
  'Abu Dabi': { name: 'Abu Dabi', cost: 200 },
  'Almaty': { name: 'Almaty', cost:50 },
  'Omsk': { name: 'Omsk', cost:75 },
  'Uralsk': { name: 'Uralsk', cost:80 },
  'Baku': { name: 'Baku', cost:100},
};
const ticketMap = {
  'Adult': {cost: 100 },
  'Kid': { cost:50 },
};
router.post('/apiFly', (req, res) => {
  const { arrivalDate, departureDate } = req.body;

  try {
    // Validate dates
    if (!isDate(arrivalDate) || !isDate(departureDate) || !isBefore(arrivalDate, departureDate)) {
      throw new Error('Invalid date range');
    }

    // Do something with validated dates
    console.log('Valid date range:', arrivalDate, departureDate);

    // You can continue with your logic here

    // Sending a proper response
    res.json({ success: true });
  } catch (error) {
    // Sending an error response
    res.status(400).json({ error: error.message });
  }
});


router.get('/apiFly', (req, res) => {
  // const city=req.query.city
  const destination=req.query.destination
  const numberOfPeople=req.query.NoF
  const numberOfKids=req.query.NoK
  let cost=0;
  if (destination in airportsMap){
    cost+=airportsMap[`${destination}`].cost
    if(numberOfPeople){
      cost+=numberOfPeople*ticketMap['Adult'].cost

    }
    if(numberOfKids){
      cost+=numberOfKids*ticketMap['Kid'].cost

    }
  

    const response ={
      answer:cost
    }
    var today = new Date();

    var date = today.getFullYear()+`-`+(today.getMonth()+1)+`-`+today.getDate();
    const forStorage={
      body:req.query,
      cost:cost,
      date:date
    }
    store.push(forStorage)
    res.json(response)
  }
  else{
    res.status(500).json({ error: "no such airport" });
  }
});
module.exports = router;

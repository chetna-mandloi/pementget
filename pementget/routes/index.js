var express = require('express');
var router = express.Router();

require("dotenv").config()
const Razorpay = require("razorpay")
var instance = new Razorpay({
  key_id: process.env.key_id,
  key_secret: process.env.key_secret,
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/create/orderId",(req,res,next)=>{
  var options = {
    amount: 4599 * 100,  // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11"
  };
  instance.orders.create(options, function(err, order) {
    console.log(order);
    res.send(order)
  });
})

module.exports = router;

const Razorpay = require('razorpay');

apiKey=process.env.key_id
apiSecret=process.env.key_secret

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;
const express = require("express");
const app = express();
app.use(express.json());
const Razorpay = require("razorpay")
app.use(express.static("./public"))
// app.get("/", (req, res) => {
//     res.send("hello");
//     console.log("hello this is backend");
// });

app.post("/order", async (req, res) => {

    var amount = req.body.amount;

    //this needs to go in .env file
    var instance = new Razorpay({ 
       key_id: 'rzp_test_PwptW1080n38Ts', 
        key_secret: 'Zs5QbTmxHdduGzwhPRZz9ouA'
    });
       
    var options = {
        amount: 50000,
        currency: "INR",
        receipt: "receipt#1",
    };

    var myOrder = await instance.orders.create(options)
    res.status(200).json({
        success: "true",
        amount,
        order:myOrder,
    });

});
app.listen(4000,() => {
    console.log("Server is running at port 4000");
})
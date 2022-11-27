const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello");
    console.log("hello this is backend");
});

app.post("/order", (req, res) => {
    
    var amount = req.body.amount;
    var instance = new Razorpay({ key_id: 'YOUR_KEY_ID', key_secret: 'YOUR_SECRET' });

    var options = {
        amount: 50000,
        currency: "INR",
        receipt: "receipt#1",
    };

    var myOrders = instance.orders.create(options)
    res.status(200).json({
        success: "true",
        amount,
        order:myOrder,
    });

});
app.listen(4000,() => {
    console.log("Server is running at port 4000");
})
var express = require("express")
var bodyParser = require("body-parser")
var cors = require("cors");
var app = express()
var router = require("./app/Router/User")


app.set("port", process.env.PORT || 8000)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: "5000kb" }))


app.use(cors())
app.use("/", router);
app.use("/SignIn", router);
app.use("/SignUp", router);
app.use("/addProducts", router);
app.use("/getProducts", router);
app.use("/checkOut", router);
app.use("/GetChekouts", router);
app.use("/payment", router);
app.use("/getPayment", router);




app.listen(app.get("port"), (err, succ) => {
    console.log(`Server is runing on port ${app.get("port")}`)
})

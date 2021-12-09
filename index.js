const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
).then(()=> console.log("DBconnectionSuccessful"))
.catch((err) => {
    console.log(err);
});

app.use("/api/user", userRoute);

app.listen(15000, () => {
    console.log("Backend server is running!");
})
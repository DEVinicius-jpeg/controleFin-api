const express = require("express");
const app = express();
const payments = require("./routes/payments");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.json());

app.use('/api/v1/payments', payments);
app.use('/api/v1/payments/:id', payments);

const port = 3000;

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`SERVER IS LISTENING ON PORT ${port}...`));
    } catch (error) {
        console.log(error)
    }
}

start()
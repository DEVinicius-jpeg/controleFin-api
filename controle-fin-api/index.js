const express = require("express");
const app = express();
const payments = require("./routes/payments");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());

app.use('/api/v1/payments', payments);

app.use(notFound);
app.use(errorHandlerMiddleware);

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
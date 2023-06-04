const express = require("express");
const app = express();
const payments = require("./routes/payments");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const cors = require('cors')

app.use(express.json());

// const corsOptions = {
//     origin: 'http://127.0.0.1:5173/', // Substitua pela origem correta do seu aplicativo React
//     methods: 'GET, POST, PUT, DELETE',
// };

app.use(cors());

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
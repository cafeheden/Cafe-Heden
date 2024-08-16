const express = require('express');
const app  = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./routes/AuthRouter")
const FoodMenuRouter = require("./routes/FoodMenuRoute")
const AdminOrderRouter = require("./routes/AdminOrderRoute")

require("dotenv").config();
require('./Models/db')

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

app.use('/auth', AuthRouter);
app.use('/food-menu', FoodMenuRouter);
app.use('/place-order', AdminOrderRouter);

app.listen(PORT, () =>  {
    console.log(`Server is running on ${PORT}`);
});
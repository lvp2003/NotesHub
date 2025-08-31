const express = require("express");
const app = express();
const port = 3000;
const connectDB = require("./config/db");
require("dotenv").config();
connectDB(process.env.MONGO_URI);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

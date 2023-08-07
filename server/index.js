const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("WElcome to Chat APP");
});

const port = process.env.PORT || 5000;
const Db = process.env.CONNECTION_STRING;

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}.`);
});

mongoose
  .connect(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((err) => {
    console.log("message", err.message);
  });

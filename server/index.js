const express = require("express");
const dotnev = require("dotenv");
const cors = require("cors");
const chatBotRoutes = require("./Routes/chatBotRoutes");
const app = express();

dotnev.config();
console.log(process.env.PORT);
app.use(express.json());
app.use(cors());
app.use("/api/chatBot", chatBotRoutes);
// console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);
const port = process.env.PORT || 5000;
const server = app.listen(
  port,
  console.log(`Server running on PORT ${port}...`)
);
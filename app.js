require('dotenv').config();
const express = require("express");
const app = express();
const path = require("node:path")


const indexRouter = require('./routes/indexRouter');
const assetsPath = path.join(__dirname, "public")

app.use(express.urlencoded({ extended: true })); 
app.use(express.static(assetsPath))
app.use("/", indexRouter)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

app.listen(process.env.PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${process.env.PORT}!`);
});

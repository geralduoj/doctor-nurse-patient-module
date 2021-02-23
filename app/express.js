const express = require("express");
const { config } = require("dotenv");
//Routers.
const mainRouter = require("./routers/MainRouter");
const featuresRouter = require("./routers/FeaturesRouter");
const customerRouter = require("./routers/CustomerRouter");

//invoking the dotenv config.
config();
const app = express();

const port = process.env.PORT;

app.use(express.json());

//Main router.
app.use(mainRouter);
//Features router.
app.use(featuresRouter);
//Customer router.
app.use(customerRouter);

app.listen(port, () => {
  console.log("Server is up and running on port " + port + ".");
});

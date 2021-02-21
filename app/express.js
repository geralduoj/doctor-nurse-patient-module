const express = require("express");
const { config } = require("dotenv");
//Routers.
const indexRouter = require("./routers/indexRouter");
//Routers.
const featuresRouter = require("./routers/features");

//invoking the dotenv config.
config();
const app = express();

const port = process.env.PORT;

app.use(express.json());

//Index router.
app.use(indexRouter);
//Features router.
app.use(featuresRouter);

app.listen(port, () => {
  console.log("Server is up and running on port " + port + ".");
});

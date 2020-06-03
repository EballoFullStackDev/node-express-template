const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = require("./config/keys.js").mongoURI; // DB Config
require("dotenv").config();
const example = require("./routes/api/user");

//express. urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. 
app.use(
  express.urlencoded({
    extended: false,
  })
);

//express. json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
app.use(express.json());

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, 'useFindAndModify': false })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

app.use("/api", example);

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

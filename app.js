const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');

// routes
const users = require("./routes/api/users");
const transactions = require("./routes/api/transactions");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// passport
app.use(passport.initialize());
require('./config/passport')(passport);

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/users", users);
app.use("/api/transactions", transactions);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
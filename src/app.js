const express = require("express");
const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("Handling the route user! (1)");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 2! (2)");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 3! (3)");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 4! (4)");
    next();
  },
  (req, res) => {
    console.log("Handling the route user 5! (final)");
    res.send("5th Response!");
  }
);

app.listen(7777, () => {
  console.log("server is running on port 7777");
});

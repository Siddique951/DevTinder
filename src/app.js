const express = require("express");

const app = express();

app.use('/', (req, res) => {
    res.send("I Am Learning Backend");
})

app.use('/test', (req, res) => {
    res.send("Hello Form The Server");
})

app.use('/next', (req, res) => {
    res.send("Hello World");
})

app.listen(7777, () => {
    console.log("server is running on port 7777");
});



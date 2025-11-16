const express = require("express");

const app = express();

// This will only handle Get call to /user
app.get('/user', (req, res) => {
    res.send({ firstname: "Siddique", lastname: "Shaikh" })
})

// This will only handle Post /user
app.post('/user', (req, res) => {
    // saving data to DB 
    res.send("Data Successfully Saved to the Data base")
})


app.delete('/user', (req, res) => {
    res.send("Deleted Successfully")
})

// This will match all the HTTP method API calls to /test
app.use('/test', (req, res) => {
    res.send("Hello Form The Server");
})

app.listen(7777, () => {
    console.log("server is running on port 7777");
});

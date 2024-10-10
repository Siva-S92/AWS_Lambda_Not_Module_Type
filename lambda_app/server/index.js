const express = require('express');
const serverless = require('serverless-http');



//app configure
const app = express();
// const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json())

app.get("/api", async(req, res) => res.send("hello! world"))
app.get("/service", async(req, res) => res.send('All the Services are Executed Very Well'))


// app.listen(PORT, () => {
//    console.log("server running successfully onthe port", PORT)
// })

module.exports.handler = serverless(app)

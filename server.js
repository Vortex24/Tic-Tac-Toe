import express from "express";

const port = process.env.PORT;
const app = express();

app.listen(port || 4444, (req, res) => {
    console.log("Service is up and running at port 8000!\n");
});
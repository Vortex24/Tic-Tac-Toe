import express from "express";
import { setupDBConnection } from "./util/dbConnection.js";

const port = process.env.PORT || 4444;
const app = express();

// mongoDB connection setup
setupDBConnection().catch(console.dir);

app.listen(port, (req, res) => {
    console.log(`Service is up and running at port ${port}!`);
});
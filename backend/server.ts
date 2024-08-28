const express = require('express');
import { NextFunction, Request, Response} from "express";

const app = express();
const port = 3301;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
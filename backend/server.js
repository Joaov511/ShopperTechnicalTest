"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var port = 3301;
app.listen(port, function () {
    console.log("Listening on port ".concat(port));
});

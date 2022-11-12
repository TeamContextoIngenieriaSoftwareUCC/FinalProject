require('./database.js');
const express = require('express');
const cors = require('cors');
const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());

module.exports = {
    app, 
    PORT
};
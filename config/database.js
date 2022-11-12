const mongoose = require('mongoose');

const USER = 'root';
const PASS = 'root';
const DB = 'finalProject';

const URL_DB = `mongodb+srv://${USER}:${PASS}@cluster0.hdow3c0.mongodb.net/${DB}?retryWrites=true&w=majority`;

async function connectToDatabase() {
    await mongoose.connect(URL_DB);
}

connectToDatabase()
    /* .then(()=>console.log('Connected to MongoDB')) */
    .catch(err => console.log(err));
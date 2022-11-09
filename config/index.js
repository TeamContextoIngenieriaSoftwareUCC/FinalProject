const mongoose = require('mongoose');

const PORT = 3000;
const URL_DB = "mongodb+srv://root:root@cluster0.hdow3c0.mongodb.net/?retryWrites=true&w=majority";

async function connectToDatabase() {
    await mongoose.connect(URL_DB);
}

connectToDatabase()
    /* .then(()=>console.log('Connected to MonoDB')) */
    .catch(err => console.log(err));

module.exports = {
    PORT,
};
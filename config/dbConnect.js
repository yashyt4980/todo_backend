const mongoose = require('mongoose');
require("dotenv").config();
const dbConnect = async () => {
    const conn = await mongoose.connect(process.env.DB_URL);
    return conn;
}
module.exports = { dbConnect }
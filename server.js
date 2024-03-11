const express = require('express');
const cors = require('cors');
const taskRoutes  = require('./routes/taskRoutes');
const { dbConnect } = require('./config/dbConnect');

const app = express();
const conn = dbConnect();
if(conn) console.log("Database connection succesfull");
else console.log("Database cant be connected");

app.use(cors());
app.use(express.json());
app.use("/api/v1", taskRoutes);


app.get("/", (req,res) => {
    res.send("Server is running");
});
app.listen(5000,() => {
    console.log("Server is running at port 5000");
});

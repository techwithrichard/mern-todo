const express = require('express');
const connectDb =  require('./db/Connect')
const app = express();
const tasks = require('./routes/Tasks')
const mongoose = require('mongoose');
const connectDB = require('./db/Connect');
require('dotenv').config()

// import tasks from './routes/Tasks'

// middleware
app.use(express.static('./public'));

app.use(express.json())

// routes
app.get('/test', (req, res)=>{
    res.send("Task Manager App")

})

app.use('/api/v1/tasks', tasks)

// app.get("/api/v1/tasks") - get all tasks
// app.get("/api/v1/tasks/:id", (req, res)) - get single task
// app.post("/api/v1/tasks", (req, res) - create task
// app.patch("/api/v1/tasks/:id", (req, res)) - update task
// app.delete("/api/v1/tasks/:id", (req, res) - delete task


const server_port = process.env.PORT || 5000;

const start = async (req, res) => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(server_port, () =>console.log(`listening on ${server_port}`));
    }catch(error){
        console.log(error);
    }
}

start();


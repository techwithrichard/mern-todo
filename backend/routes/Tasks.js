// import express from "express"
const express = require("express")
const router = express.Router();

const {getAllTasks, getOneTask, createTask, updateTask, deleteTask} = require('../controllers/Tasks')


router.route('/').get(getAllTasks).post(createTask).get(getOneTask)

router.route('/:id').get(getOneTask).patch(updateTask).delete(deleteTask)

// router.route('/').post((req, res)=>{
//     res.send('creating new task')
// })

// router.route('/:id').patch(()=>{
//     res.send('Update task')
// })

// router.route('/:id').delete((req, res)=>{
//     res.send('delete task')
// })
module.exports = router;
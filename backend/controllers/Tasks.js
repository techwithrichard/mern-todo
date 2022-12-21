const Task = require('../models/Task')

const createTask = async (req, res)=>{
    try {
        const task = await Task.create(req.body)
         res.status(200).json({task})
        //  send('New Task Created Successfully!')
    }catch(error){
        res.status(500).json({msg: error.message})
    }
};

const getAllTasks = async (req, res)=>{
    try {
// res.send('getting all tasks in database')
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    }

    catch(error){
         res.status(500).json({msg: error.message})
    }
}

// const getAllTodo = async (req, res)=>{
//     try {
//         const Todos = Task.find({})
//         res.status(200).json({ Todos })
//     } catch (error) {
//         res.status(500).json({msg: error.message})
//     }
// }

const getOneTask = async (req, res)=>{

    try {
        const task = await Task.findOne({_id: req.params.id})
       
        if(!task){
            return res.status(404).json({msg: 'Task not found '});  
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error.message})
    
    }
}

const updateTask = async (req, res)=>{
    try {
        const {id:taskID} = req.params
        // res.status(200).json({id:task.id, data:req.body});
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body,{
            new:true,runValidators:true
        });
        
        if (!task) {
            res.status(404).json({msg: 'Task not found'})
        }
        else {
            
           res.status(200).json({task: task})
            
        
        console.log('nothing updating now')

        }
    } catch (error) {
       
        res.status(500).json({msg: error.message});
    }
}

const deleteTask = async (req, res)=>{
    try {const taskID = req.params.id
            const task = await Task.findOneAndDelete(req.params._id);
            if(!task){
            res.status(404).json({msg: `No Task found ${req.params.id}`})
            }
            else{
                res.status(200).json({msg:'Task Delete Success'});
            }
    } catch (error) {
        res.status(500).json({msg: 'Error while saving'});
    }
}

module.exports = {
    getAllTasks,
    getOneTask,
    updateTask,
    createTask,
    deleteTask,
}
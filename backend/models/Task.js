const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name : {
        required: [true, 'Please provide task name'],
        trim:true,
        maxlength: [20, 'Cannot be more than 20 characters'],
        type: String,
    },
    completed : {
        type : Boolean,
        default: false,
        
    }
})

// const Tasks = mongoose.model('Tasks', taskSchema);
// module.exports = Tasks;

module.exports = mongoose.model('Task', taskSchema);
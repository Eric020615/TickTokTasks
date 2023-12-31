const mongoose = require('../services/mongodb');

const taskSchema = new mongoose.Schema({
    user_id:{
        type: String,
        required: [true]
    },
    email:{
        type: String,
        required: [true]
    },
    title:{
        type: String,
        required: [true, 'Please enter the name of task.'],
    },
    description:{
        type: String,
        maxlength: [500, 'Please enter maximum 500 characters']
    },
    date:{
        type: String,
        required: [true, 'Please enter the date of task.']
    },
    priority_level:{
        type: String,
        required: [true, 'Please enter the priority level.']
    },
    progress_level:{
        type: Number,
        required: [true, 'Please enter the progress level.']
    },
    email_frequence:{
        type: Number,
        require: [true]
    }
})

const Task = mongoose.model('task', taskSchema);
module.exports = Task;

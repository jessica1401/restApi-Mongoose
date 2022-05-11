const mongoose = require('mongoose');
const connectionUrl = 'mongodb://127.0.0.1:27017/task-manager-api'

mongoose.connect(connectionUrl, { useNewUrlParser: true })


// const User = mongoose.model('tasks', {
//     description: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const newTask = new User({
//     description: 'Learning Mogoose     '
// })

// newTask.save().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log('Error in etnerring the field', err);
// })

// const User = mongoose.model('users', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     },
//     email: {
//         required: true,
//         type: String,
//         trim: true,
//         lowercase: true
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value) {
//             if(value.toLowerCase().includes('password')) {
//                 throw new Error('password connot contain password')
//             }
//         }
//     }
// })

// const me = new User({ 
//     name: 'sanohit',
//     age: 20,
//     email: 'kjhb@gmail.com',
//     password: 'khgkhgbpassword'
// })

// me.save().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log('Error in etnerring the field');
// })
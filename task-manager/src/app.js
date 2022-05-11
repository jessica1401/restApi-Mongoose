const express = require('express')
require('./db/mongoose')
const userRouter = require('./routes/users') 
const taskRouter = require('./routes/tasks')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) 
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const express = require('express');
// require('./db/mongoose');
// const User = require('./models/user')
// const Task = require('./models/tasks');
// const { ObjectId } = require('mongodb');
// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json())

// app.get('/tasks', (req, res) => {
//     Task.find({}).then((result) => {
//         res.send(result)
//     })
// })

// app.get('/tasks/:id', (req, res) => {
//     const _id = req.params.id
//     Task.findById(_id).then((user) => {
//         if (!user) {
//             return res.status(404).send()
//         }
 
//         res.send(user)
//     }).catch((e) => {
//         res.status(500).send()
//     })
// })

// app.post('/tasks', async (req, res) => {
//     const task = new Task(req.body);
//     try {
//         await task.save()
//         res.send(task)
//     } catch(e) {
//         res.status(404).send(e)
//     }
// })

// // app.post('/tasks', (req, res) => {
// //     const task = new Task(req.body);

// //     task.save().then(() => {
// //         res.send(task)
// //     }).catch((e) => {
// //         res.status(400).send(e)
// //     })
// // })

// app.get('/users', async (req, res) => {
//     try {
//         const users = await User.find({})
//         res.send(users)
//     } catch(e) {
//         res.send(500).send()
//     }

//     // User.find({}).then((result) => {
//     //     if(!result) {
//     //         return res.status(404).send('User Not Found')
//     //     }
//     //     res.send(result)
//     // }).catch((e) => {
//     //     res.status(500).send()
//     // })
// })

// app.get('/users/:id', (req, res) => {
//     const _id = req.params.id

//     User.findById(_id).then((user) => {
//         if (!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     }).catch((e) => {
//         res.status(500).send()
//     })
// })

// app.post('/users', (req, res) => {
//     const user = new User(req.body)

//     user.save().then(() => {
//         res.send(user)
//     }).catch((e) => {
//         console.log(e);
//         res.status(400).send(e)
//     })
// })

// app.patch('/users/:id', async (req, res) => {
//     try {
//         const user = await User.findByIdAndUpdate(req.params.id, {name: req.body.name}, {new: true, runValidators: true})
//         if(!user) {
//             return res.status(404).send()
//         }
//         res.send(user)
//     } catch(e) {
//         res.status(400).send()
//     }
// })

// app.delete('/users/:id', async (req, res) => {
//     try {
//         const user = await User.findByIdAndDelete(req.params.id)
//         if(!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     } catch(e) {
//         console.log('Unable ti detelte', e)
//     }
// })

// app.listen(port, (err) => {
//     if(err) {
//         return console.log('Eroor in starting the server');
//     }
//     console.log('Server started on port number ' + port)
// })
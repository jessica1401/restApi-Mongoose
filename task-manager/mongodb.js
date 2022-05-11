const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }
    const db = client.db(databaseName);
db.collection('users').updateOne(
    {
        _id: new mongodb.ObjectId('627aab2e05fca53512356364')
    },
    {
        $set:{
            name: 'Tejas1'
        }
    }
).then((result => {
    console.log(result);
})).catch((err) => {
    console.log(err);
})

    // db.collection('users').findOne(
    //     {
    //         name: 'Jessica'
    //     }, (err, result) => {
    //         if(err) {
    //             return console.log('Unable ti fetch');
    //         }
    //         console.log(result);
    //     }
    // )

    //  db.collection('users').insertOne({
    //      name: 'Tejas',
    //      age: 21
    //  }, (err, result) => {
    //      if(err) {
    //          return console.log('unable to insert user');  
    //      } 
    //      console.log(result.insertedId);
    //  }) 

    // db.collection('users').insertMany([
    //     {
    //         name: 'Udhay',
    //         age: 16
    //     },
    //     {
    //         name: 'Rohan',
    //         age: 8
    //     }
    // ], (err, result) => {
    //     if(err) {
    //         return console.log('Error in inserting documents');
    //     }
    //     console.log(result);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Task 1',
    //         completed: true
    //     },
    //     {
    //         description: 'Task 2',
    //         completed: true
    //     },
    //     {
    //         description: 'Task 3',
    //         completed: false
    //     }
    // ], (err, result) => {
    //     if(err) {
    //         return console.log('Error in inserting documents');
    //     }
    //     console.log(result);
    // })
})
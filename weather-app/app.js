const request = require('request');

const url = 'https://jsonplaceholder.typicode.com/todos'
 request({url: url, json: true}, (error, res) => {
    //  const data = JSON.parse(res.body)
     console.log(res.body);
 })


// console.log('Starting');

// setTimeout(() => {
//     console.log('2 Seconds Timer');
// }, 2000)

// setTimeout(() => {
//     console.log('0 secong Timer')
// }, 0)

// console.log('Stoping');
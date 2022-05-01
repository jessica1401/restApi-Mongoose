//3..
const yargs = require('yargs');
const noteFunctions = require('./notes')
// console.log(yargs.argv)
// yargs.version('1.1.0')
yargs.command({
    command: 'add',
    describe: 'Add anew Node',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true, 
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        noteFunctions.addNote(argv.title, argv.body )
    }
}) 

yargs.command({
    command: 'remove',
    describe: 'Remove a Note',
    builder: {
        title:{
            describe: 'Remove Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        noteFunctions.removeNote(argv.title) 
    }
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        noteFunctions.listNotes() 
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Read a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        noteFunctions.readNote(argv.title) 
    } 
})

yargs.parse()
//2..
// const getNotes = require('./notes');
// const msg = getNotes();
// console.log(msg)

// 1..
// const add = require('./utils')
// const firstName = "Jessica"
// console.log(firstName);
// console.log(add(1, 1))
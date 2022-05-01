//2..
const fs = require('fs') 

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicatesNotes = notes.filter(note => note.title === title)
    if(duplicatesNotes.length === 0 ) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log('Note Added');      
    } else {
        console.log('Note title taken');
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson) 
}

const loadNotes = () => {
    try { 
        const allNotesInBuffer = fs.readFileSync('notes.json');
        const allNotes = allNotesInBuffer.toString();
        return JSON.parse(allNotes) 
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    const allNotes = loadNotes();
    const notesToKeep = allNotes.filter(note => note.title !== title);
    if(allNotes.length === notesToKeep.length) {
        console.log('No note found!!.. ');
    } else {
        saveNotes(notesToKeep);
        console.log('Note Deleted');
    }
}

const listNotes = () => {
    console.log('There are all Notes');
    const allNotes = loadNotes();
    allNotes.forEach(notes => {
        console.log(notes.title);
    })
}

const readNote = (title) => {
    console.log('Reading a note');
    const allNotes = loadNotes();
    const note = allNotes.find(note => note.title === title);
    if(note) {
        console.log('Note = ', note.body);
    } else {
        console.log(`Note doesn't exists!`);
    }
}

module.exports = {addNote, removeNote, listNotes, readNote }; 
const notes = require('express').Router();
const { readAndAppend, readFromFile } = require('../helper/fsHelper');

//Get Route for retrieving all the feedback
notes.get('/', (req, res) =>
readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)))
);


//POST Route for submitting feedback
notes.post('/', (req, res) => {
  // Destructuring assignment for the items in req.body
    const {noteType, note} = req.body;

    //If all the required properties are present
    if(noteType && note) {
      //Variable for the object we will save
      const newNote = {
        noteType,
        note,
        note_id
      };

      readAndAppend(newNote, './db/notes.json');

      const response = {
        status: 'success',
        body: newNote,
      };
      res.json(response);
    } else {
        res.json('Error in posting Note')
    }
});


module.exports = notes;
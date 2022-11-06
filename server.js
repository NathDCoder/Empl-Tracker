const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3011;

const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) => { 
  res.sendFile(path.join(__dirname, '/develop/public/index.html'))}
);


// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'develop/public/pages/notes.html'))
);


// const notesRouter =  require('./routes/notes')

// app.use('/notes', notesRouter)


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);


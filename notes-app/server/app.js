import express from 'express';
import bodyParser from 'body-parser';

import * as db from './utils/DataBaseUtils.js';

db.setUpConnection();


const app = express();

app.use( bodyParser.json());

app.get('/notes', (req, res) =>{

	//вернуть все заметки которые есть
	db.listNotes().then(data=> res.send(data));
});
app.get('/notes', (req, res) =>{

	//создать заметку
	db.createNote(req.body).then(data=> res.send(data));

});
app.get('/notes/:id', (req, res) =>{

	//удалить заметку
	db.deleteNote(req.params.id).then(data=> res/send(data));
});

const server = app.listen(8080, () => {
	console.log('Server is up and running on port 8080');
});



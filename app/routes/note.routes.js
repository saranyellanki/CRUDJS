const notes = require('../controllers/note.controller.js');
module.exports = (app) => {

    app.post('/notes', notes.create);

    app.get('/notes', notes.findAll);

    app.get('/notes/:id', notes.findOne);

    app.put('/notes/:id', notes.update);

    app.delete('/notes/:id', notes.delete);
}
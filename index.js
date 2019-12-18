const express = require('express');
const data = require('./data');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.listen(port, () => console.info(`http://localhost:${port}`)); // eslint-disable-line

app.get('/', (req, res) => res.redirect('/v1/phrases'));
app.get('/v1', (req, res) => res.redirect('/v1/phrases'));
app.get('/v1/phrase', (req, res) => res.redirect('/v1/phrases'));
app.get('/v1/phrases/:id', (req, res) => res.redirect(`/v1/phrase/${req.params.id}`));
app.get('/v1/phrases', (req, res) => res.json(data));
app.get('/v1/phrase/:id', (req, res) => res.send(data[req.params.id]));

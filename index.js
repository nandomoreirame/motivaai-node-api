const express = require('express');
const data = require('./data');

const port = process.env.PORT || 5000;
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.urlencoded({ extended: false }));
app.listen(port, () => console.info(`http://localhost:${port}`)); // eslint-disable-line

app.get('/', (req, res) => res.redirect('/v1/phrases'));
app.get('/v1', (req, res) => res.redirect('/v1/phrases'));
app.get('/v1/phrase', (req, res) => res.redirect('/v1/phrases'));
app.get('/v1/phrases/:id', (req, res) => res.redirect(`/v1/phrase/${req.params.id}`));

app.get('/v1/phrases', (req, res) => {
  const phrases = data.map((phrase, id) => ({ id, ...phrase }));
  res.json(phrases);
});

app.get('/v1/phrase/:id', (req, res) => {
  const { id } = req.params;
  const phrase = data[req.params.id];
  res.send({ id, ...phrase });
});

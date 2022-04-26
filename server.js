const express = require('express');
const methodOverride = require('method-override');
const { default: mongoose } = require('mongoose');
const gameController = require('./controllers/game_controller');
const app = express();
const PORT = 4000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use('/games', gameController);


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
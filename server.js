const express = require('express');
const methodOverride = require('method-override');
const controllers = require('./controllers')
const app = express();
const PORT = process.env.PORT || 4000;

require('./config/db.connection');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }));
app.use('/games', controllers.games);
app.use('/reviews', controllers.reviews);


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
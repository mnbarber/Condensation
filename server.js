const express = require('express');
const methodOverride = require('method-override');
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = 4000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// const gameSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     release: {
//         type: String,
//         required: true
//     },
//     image: String,
//     price: Number
// })

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
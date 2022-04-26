const express = require('express');
const router = express.Router();
const db = require('../models');
const games = require('../models/Games');

// index page
router.get('/', async (req, res, next) => {
    try {
        const games = await db.Game.find({});
        const context = { games };
        return res.render('index.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// new
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

// show
router.get('/:id/', (req, res) => {
    let gameID = req.params.id;
    const context = {
        oneGame: games[gameID],
        id: gameID
    }
    res.render('show.ejs', context);
});

// edit
router.get('/:id/edit', (req, res) => {
    const foundGame = games[req.params.id];
    const context = {
        game: foundGame,
        id: req.params.id
    }
    res.render('edit.ejs', context);
});

// create/POST
router.post('/', (req, res) => {
    games.push(req.body);
    res.redirect('/games');
});

// delete
router.delete('/:id', (req, res) => {
    games.splice(req.params.id , 1);
    res.redirect('/games');
})

// put
router.put('/:id', (req, res) => {
    games[req.params.id] = req.body;
    res.redirect(`/games/${req.params.id}`);
});

module.exports = router;
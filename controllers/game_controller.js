const express = require('express');
const { redirect } = require('express/lib/response');
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
router.get('/:id/', async (req, res, next) => {
    try {
        const foundGame = await db.Game.findById(req.params.id);
        const allReviews = await db.Review.find({game: req.params.id});
        const context = {
            oneGame: foundGame,
            reviews: allReviews
        }
        return res.render('show.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// edit
router.get('/:id/edit', async (req, res, next) => {
    try {
        const updatedGame = await db.Game.findById(req.params.id);
        const context = {
            game: updatedGame
        }
        return res.render('edit.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// create/POST
router.post('/', async (req, res, next) => {
    try {
        const createdGame = await db.Game.create(req.body);
        res.redirect('/games');
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// delete
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedGame = await db.Game.findByIdAndDelete(req.params.id);
        return res.redirect('/games');
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// put
router.put('/:id', async (req, res, next) => {
    try {
        const updatedGame = await db.Game.findByIdAndUpdate(req.params.id, req.body);
        return res.redirect('/games');
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

module.exports = router;
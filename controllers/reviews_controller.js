const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req, res, next) => {
    try {
        const allReviews = await db.Review.find({});
        res.send(allReviews);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

router.get('/new', async (req, res, next) => {
    try {
        const games = await db.Game.find({});
        const context = {games: games};
        res.render('reviews/new.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

router.post('/', async (req, res, next) => {
    try {
        const newReviewData = req.body;
        const newReview = await db.Review.create(newReviewData);
        console.log(newReview);
        res.redirect(`/games/${newReview.game}`);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

router.get('/:reviewID', async (req, res, next) => {
    try {
        const foundReview = await db.Review.findById(req.params.reviewID).populate('game');
        res.render('reviews/show.ejs', {review: foundReview});
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

router.put('/:reviewID', async (req, res, next) => {
    res.send('hitting review update: '+req.params.reviewID)
});

router.get('/:reviewID/edit', async (req, res, next) => {
    res.send('hitting review edit: '+req.params.reviewID);
});

router.delete('/:reviewID', async (req, res, next) => {
    try {
        const deleteReview = await db.Review.findByIdAndDelete(req.params.reviewID);
        console.log(deleteReview.id, "<<review |", deleteReview.game, "<<game");
        res.redirect('/games/'+deleteReview.game);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

module.exports = router;
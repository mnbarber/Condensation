const express = require('express')
const router = express.Router()
const db = require('../models/Review')

router.get('/', async (req,res, next)=>{
    try {
        const allReviews = await db.Review.find({})
        res.send(allReviews)
    } catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})

router.get('/new', async (req,res, next)=>{
    try {
        const allGames = await db.Game.find()
        const context ={games: allGames}
        res.render('reviews/new.ejs', context)
    } catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})

router.post('/', async (req,res, next)=>{
    try{
        const newReviewData = req.body
        const newReview = await db.Review.create(newReviewData)
        console.log(newReview)
        res.redirect(`/games/${newReview.game}`)
    }catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})

router.get('/:reviewId', async (req,res, next)=>{
    try {
        const foundReview = await db.Review.findById(req.params.reviewId).
        populate('product')
        res.render('reviews/show.ejs', {review: foundReview})
    }catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})

router.put('/:reviewId', async (req,res, next)=>{
    res.send('hitting review update: '+req.params.reviewId)
})

router.get('/:reviewId/edit', async (req,res, next)=>{
    res.send('hitting review edit: '+req.params.reviewId)
})

router.delete('/:reviewId', async (req,res, next)=>{
    try{
        const deleteReview = await db.Review.findByIdAndDelete(req.params.reviewId)
        console.log(deleteReview.id, "<<review |",deleteReview.game,"<<game")
    }catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})

module.exports = router
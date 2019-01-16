const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}));

router.get('/google/callback', 
    passport.authenticate('google', {failureRedirect: '/'}), (err, req, res, next) => {
        if(err.name === 'TokenError') {
            res.redirect('/auth/google');
        } else {
            res.redirect('/dashboard');
        }
        
    }
);

module.exports = router;
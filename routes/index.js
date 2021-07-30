const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth')

/**
 * @desc /Landing page
 * @route GET /
 */
router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login_layout'
    })
})

/**
 * @desc Dashboard
 * @route GET /dashboard
 */
router.get('/dashboard', ensureAuth, (req, res) => {
    res.render('dashboard')
})

module.exports = router;

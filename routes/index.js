const express = require('express');
const router = express.Router();

/**
 * @desc /Landing page
 * @route GET /
 */
router.get('/', (req, res) => {
    res.render('login', {
        layout: 'login_layout'
    })
})

/**
 * @desc Dashboard
 * @route GET /dashboard
 */
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = router;

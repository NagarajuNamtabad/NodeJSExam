const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {

    console.log('In another middleware !');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));     

});



router.post('/add-product', (req, res, next) => {

    console.log(req.body);
    res.redirect('/');
    res.send('<h1>Hello from Express!</h1>');

});

module.exports = router;
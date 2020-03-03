const express = require('express');

const router = express.Router();

const path = require('path');

router.get('/add-item', (req, res, next) => {
  return res.sendFile(path.join(__dirname, '../', 'views', 'add-item.html'))
})

router.post('/add-item', (req, res, next) => {
  console.log('body_dude', req.body);
  return res.redirect('/');
})

module.exports = router;
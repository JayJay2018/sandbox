const express = require('express');

const router = express.Router();

const path = require('path');

router.get('/items', (req, res, next) => {
  return res.sendFile(path.join(__dirname, '../', 'views', 'items.html'))
})

module.exports = router;
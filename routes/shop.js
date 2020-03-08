const express = require('express');

const router = express.Router();

// const path = require('path');
const adminData = require('./admin')


router.get('/', (req, res, next) => {
  // return res.sendFile(path.join(__dirname, '../', 'views', 'items.html'))
  const products = adminData.products;
  return res.status(200).render('shop.ejs', {
    title: 'Shop',
    prods: products,
    path: '/'
  })
})

module.exports = router;
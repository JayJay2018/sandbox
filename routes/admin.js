const express = require('express');

const router = express.Router();

// const path = require('path');

const products = [];

router.get('/add-product', (req, res, next) => {
  // return res.sendFile(path.join(__dirname, '../', 'views', 'add-item.html'))
  return res.status(200).render('add-product.ejs', {
    title: 'Admin Page',
    path: '/admin/add-product'
  });
})

router.post('/add-product', (req, res, next) => {
  products.push({title: req.body.title})
  // console.log('body_dude', req.body);
  console.log(products);
  return res.redirect('/');
})

exports.routes = router;
exports.products = products;

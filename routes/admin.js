const express = require('express');

const router = express.Router();

// const path = require('path');

const productRoutes = require('../controllers/products')

router.get('/add-product', productRoutes.getAddProduct)

router.post('/add-product', productRoutes.postAddProduct)

module.exports = router;


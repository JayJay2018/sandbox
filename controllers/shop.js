const product = require('../models/product');

exports.getProducts = (req, res, next => {
  Product.fetchAll(products => {
    res.render('/shop/product-list', {
      prods: products,
      title: 'All products',
      path: '/products'
    })
  })
})

exports.getIndex = (req, res, next => {
  Product.fetchAll(products => {
    res.render('/shop/index', {
      prods: products,
      title: 'Shop',
      path: '/'
    })
  })
})

exports.getOrders = (req, res, next => {
  res.render('/shop/orders', {
    title: 'Your Orders',
    path: '/orders'
  })
})

exports.getCart = (req, res, next => {
  res.render('/shop/cart', {
    title: 'Your Cart',
    path: '/cart'
  })
})

exports.getCheckout = (req, res, next => {
  res.render('/shop/checkout', {
    title: 'Checkout',
    path: '/checkout'
  })
})
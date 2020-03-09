 const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  // return res.sendFile(path.join(__dirname, '../', 'views', 'add-item.html'))
  return res.status(200).render('add-product.ejs', {
    title: 'Admin Page',
    path: '/admin/add-product'
  });
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  return res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  return res.status(200).render('shop.ejs', {
    title: 'Shop',
    prods: products,
    path: '/'
  })
}